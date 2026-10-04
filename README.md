# Faire Ensemble · Explorateur de cartes

Application web statique (HTML, CSS, JavaScript sans framework ni étape de build) pour explorer les 57 cartes du jeu
**Faire Ensemble** des Métacartes : 52 « recettes » (formats d’animation) et 5 « ingrédients » (principes de conception).
Elle aide à trouver un format adapté à une réunion, à préparer une séance et à l’animer.

- **Contenus** : « Métacartes Faire Ensemble », Lilian Ricaud et Mélanie Lacayrouze / Métacartes, licence
  [CC BY-SA 3.0 FR](https://creativecommons.org/licenses/by-sa/3.0/fr/). Les contenus adaptés (textes, illustrations,
  classement, synthèses) sont diffusés sous la même licence.
- **Code** : licence MIT. Projet indépendant, non affilié à Métacartes.

## Fonctionnalités

| Fonction | Où | Notes |
|---|---|---|
| Recherche plein texte, filtres (objectif, durée, taille, complexité, type, matériel, favoris), tri | accueil | l’état est écrit dans l’adresse (`?q=…&obj=…`) et se partage par lien ; pastille « Copier le lien » |
| Fiche détaillée : essentiel, astuces, « La méthode en détail » (synthèse des sources + liens), variantes, enchaînements suggérés | `#carte/<slug>` | la section « La méthode en détail » est repliée par défaut |
| Favoris | tuiles et fiche | `localStorage` uniquement |
| Prompt pour un assistant IA (sujet, public, durée) + lien vers un exemple de réponse | bas de chaque fiche recette | pas de prompt pour les ingrédients |
| Mode animation : essentiel en grand, minuteur, plein écran, signal sonore, écran maintenu allumé | bouton « Animer » de la fiche | téléphone posé sur la table ou projection |
| Déroulé de séance : panier ordonné, durées, total, copie, lien, impression, prompt du conducteur complet | bouton « Déroulé » (barre du haut), « + » sur les tuiles | partagé par `?deroule=slug:min,…` |
| Impression d’une fiche | bouton imprimante de la fiche | sans sources, ingrédients clés ni formats liés ; saut de page avant « La méthode en détail » |
| QR code de l’adresse de l’app | barre du haut | généré à la volée, donc valable quel que soit l’hébergement |
| Hors ligne et installation (PWA) | automatique | voir « Service worker » plus bas |
| Thème clair / sombre | barre du haut | mémorisé dans `localStorage` |
| Page `exemple.html?carte=<slug>` | lien sous « Générer le prompt » | affiche une réponse d’exemple (Markdown mis en forme, prompt, source) |

Raccourcis : `/` recherche, `←` `→` fiche précédente / suivante, `Échap` fermer ; dans le mode animation, `Espace` démarre ou
met en pause, `F` bascule le plein écran.

## Arborescence

```
index.html             page unique de l’application (accueil, fiche, déroulé, animation, QR, À propos)
exemple.html           page d’affichage d’un exemple de réponse
css/styles.css         tous les styles (jetons de couleur en tête, thème sombre, impression en fin de fichier)
js/app.js              toute la logique de l’application (un seul fichier, sections commentées)
js/exemple.js          logique de exemple.html
js/data.js             contenu des cartes – GÉNÉRÉ (voir ci-dessous), ne pas modifier à la main
js/classement.js       données éditoriales maintenues à la main (objectifs, classement, durées, alias, sources ajoutées)
js/syntheses.js        synthèses « La méthode en détail » – généré à partir de fragments HTML, puis maintenu à la main
js/exemples.js         correspondance carte → fichier d’exemple – GÉNÉRÉ par outils/generer-exemples.js
js/vendor/             bibliothèques embarquées : qrcode-generator (QR), marked (Markdown) – licence MIT
img/cartes/            illustrations des cartes (une par slug)
img/contenus/          images citées dans certaines cartes
img/icones/            icônes de l’application installée (PNG générés à partir du logo)
exemples/              prompts générés et réponses d’exemple (voir exemples/README.md)
manifest.webmanifest   manifeste de l’application installable
sw.js                  service worker – GÉNÉRÉ par outils/generer-sw.js
outils/                scripts de maintenance (Node.js)
```

## Les données et leur circuit

1. **`js/data.js`** contient le texte brut des cartes tel qu’il a été extrait de metacartes.cc, sous la forme
   `window.CARTES = [...]` (une ligne JSON). Il est produit par un script PowerShell (`outils/generer-donnees.ps1`)
   qui n’est pas dans ce dépôt : toute modification manuelle serait perdue à la prochaine génération. Les fragments
   HTML sont rééquilibrés au chargement (`equilibrer()` dans `app.js`) car deux cartes ouvrent un `<div>` dans leur
   chapeau et le ferment plus loin.
2. **`js/classement.js`** porte tout ce qui est éditorial et absent des cartes d’origine : les objectifs
   (`OBJECTIFS`, avec couleur et synonymes de recherche), le classement de chaque carte (`CLASSEMENT`), les durées
   corrigées (`DUREES_MANUELLES`), les alias de titres pour les liens automatiques (`ALIAS`) et les sources ajoutées
   pour les cartes qui ne citaient aucun lien (`SOURCES_AJOUTEES`). À modifier librement.
3. **`js/syntheses.js`** contient, par slug, un fragment HTML (`<p>`, `<h4>`, `<ul>`, `<ol>`, `<li>`, `<strong>`,
   `<em>` seulement) résumant les liens de « La méthode en détail ». Les synthèses ont été rédigées par un assistant IA ;
   treize cartes reposent sur des sources qui n’ont pas pu être lues directement (5 pourquoi, analyse SWOT, carte
   mentale, cercle de parole, chifoumi, langage silencieux, 3C, matrice impact/effort, matrice plus/delta, méthode
   des post-it, photolangage, réunion en marchant, tri par affinités) : une relecture humaine est recommandée.
   Pour ajouter une synthèse, ajoutez une entrée `'slug': \`…\`` en respectant les balises autorisées.
4. **`exemples/`** : pour chaque recette, le prompt exact généré par l’application et une réponse d’assistant IA.
   Après modification des fichiers : `node outils/generer-exemples.js` (reconstruit l’index et `js/exemples.js`).
   Si le générateur de prompt change : `node outils/extraire-prompts.js` (Playwright) puis régénérer les réponses.

## Points d’attention pour la maintenance

- **Service worker** (`sw.js`). Il précache la coquille de l’application et toutes les images, avec une version
  calculée à partir du contenu des fichiers. **Après toute modification** de `index.html`, `exemple.html`, du CSS, d’un
  fichier `js/` ou d’une image, lancez `node outils/generer-sw.js` et commitez le `sw.js` obtenu : sinon les visiteurs
  qui ont déjà visité le site gardent l’ancienne version en cache. Si vous ajoutez un fichier à la coquille, ajoutez-le
  à la liste `coquille` du générateur. Une bannière « nouvelle version » invite l’utilisateur à recharger.
- **Hébergement**. L’application doit être servie en HTTPS (ou sur `localhost`) pour le service worker et l’installation.
  Elle fonctionne sur GitHub Pages telle quelle, à la racine ou dans un sous-dossier (chemins relatifs). Ouverte en
  `file://`, elle marche sauf la page d’exemple (lecture des `.md` bloquée) et le hors ligne.
- **Encodage des fichiers `.md`**. Certains hébergeurs ne déclarent pas l’UTF-8 pour les `.md` : c’est pourquoi
  `exemple.html` affiche le prompt et le Markdown brut dans la page au lieu de renvoyer vers les fichiers.
- **Clés `localStorage`** : `fe-theme` (thème), `fe-favoris` (favoris), `fe-prompt` (sujet, public, durée saisis),
  `fe-deroule` (déroulé). Renommer une clé fait perdre les données des utilisateurs.
- **Paramètres d’adresse** : `?q`, `obj`, `duree`, `taille`, `cplx`, `type` (`tous` = aucun filtre de type), `sans`,
  `fav`, `tri`, `deroule` ; `#carte/<slug>` pour la fiche. Les filtres par défaut ne sont pas écrits (type « recette »).
  Toute nouvelle facette doit être ajoutée à `URL_CLES` / `URL_VALIDES` dans `app.js`.
- **Ajouter ou retirer une carte** : régénérer `data.js`, placer l’illustration dans `img/cartes/`, classer la carte
  dans `classement.js` (`CLASSEMENT`, et `DUREES_MANUELLES` si la durée n’est pas lisible), écrire sa synthèse,
  éventuellement un exemple, puis régénérer `sw.js`.
- **Bibliothèques embarquées** (`js/vendor/`) : `qrcode-generator` 2.0.4 et `marked` 18.0.14, copiées telles
  quelles avec un en-tête de licence. Pour les mettre à jour, remplacez le fichier et vérifiez `exemple.html` et le QR.
- **Polices** : Fraunces et Inter sont chargées depuis Google Fonts ; sans réseau, les polices système prennent le
  relais (le service worker garde une copie après la première visite).
- **Impression** : les règles sont dans le bloc `@media print` de `styles.css`. La fiche est clonée dans `#impression`
  par `imprimer()` ; le déroulé a son propre rendu (`imprimerDeroule()`).
- **Prompt IA** : le texte de référence envoyé au modèle est construit par `ficheEnTexte()` (sections Markdown `##`).
  Les liens, ingrédients clés et formats liés en sont volontairement exclus. `HORS_PROMPT` retire quelques passages
  (mentions du livre « Faire ensemble ») pour ne pas induire le modèle en erreur.
- **Enchaînements suggérés** : `suggerer()` dans `app.js` combine les formats liés de la carte et une progression
  type de séance (`ETAPES_SEANCE` : accueillir → énergiser → parole → explorer → idées → décider → évaluer).
  Les objectifs sont ceux de `classement.js` : changer un classement change les suggestions.

## Vérifier avant de publier

```
node outils/generer-sw.js        # à chaque modification de l’app
node outils/test-smoke.js        # test de fumée dans Chromium (Playwright requis : npm i -g playwright && npx playwright install chromium)
```

Le test ouvre l’application sur un serveur local et vérifie l’accueil, les filtres dans l’adresse, la fiche, le prompt,
le déroulé, le mode animation, le QR code et la page d’exemple. Variables utiles : `PLAYWRIGHT_MODULE` (chemin du
module Playwright si installé ailleurs) et `CHROMIUM_PATH` (exécutable Chromium).

Pour servir l’application en local : `npx http-server .` (ou tout serveur statique), puis ouvrir l’adresse indiquée.
