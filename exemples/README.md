# Exemples de prompts et de réponses

Ce dossier sert à juger la qualité des prompts générés par l’application, à partir d’un même cas d’usage
appliqué aux cartes « recette » (dans l’ordre de l’accueil).

- **Sujet de discussion ou problématique** : « Comment améliorer les interactions dans une formation d’adultes ? »
- **Public qui jouera l’activité** : « Formateurs d’adultes »
- **Durée** : celle proposée par défaut par la carte (champ laissé tel quel).

Pour chaque carte :

- `prompts/<nn>-<slug>.md` : le prompt exactement tel que l’application le génère (bouton « Générer le prompt »).
- `reponses/<nn>-<slug>.md` : la réponse produite par un assistant IA à partir de ce seul prompt, sans retouche.

Les réponses sont des exemples bruts, générés automatiquement : elles ne sont ni relues ni validées
par un·e facilitateur·rice et peuvent contenir des approximations.

Pour régénérer l’index ci-dessous et `js/exemples.js` après avoir ajouté ou modifié des fichiers :
`node outils/generer-exemples.js`. Pour réextraire les prompts après une modification du générateur de prompt :
`node outils/extraire-prompts.js`.

| N° | Carte | Prompt | Réponse |
|---:|---|---|---|
| 1 | 5 pourquoi | [prompt](prompts/01-5-pourquoi.md) (1021 mots) | [réponse](reponses/01-5-pourquoi.md) (2820 mots) |
| 2 | Accélérateur de projet | [prompt](prompts/02-accelerateur-de-projet.md) (1094 mots) | [réponse](reponses/02-accelerateur-de-projet.md) (2919 mots) |
| 3 | Analyse SWOT | [prompt](prompts/03-analyse-swot.md) (1060 mots) | [réponse](reponses/03-analyse-swot.md) (2686 mots) |
| 4 | Arpentage | [prompt](prompts/04-arpentage.md) (1125 mots) | [réponse](reponses/04-arpentage.md) (3311 mots) |
| 5 | Bâton d’hélium | [prompt](prompts/05-baton-dhelium.md) (683 mots) | [réponse](reponses/05-baton-dhelium.md) (1976 mots) |
| 6 | Bâton de parole | [prompt](prompts/06-baton-de-parole.md) (1095 mots) | [réponse](reponses/06-baton-de-parole.md) (2712 mots) |
| 7 | Bodystorming | [prompt](prompts/07-bodystorming.md) (1075 mots) | [réponse](reponses/07-bodystorming.md) (3112 mots) |
| 8 | Carte mentale | [prompt](prompts/08-carte-mentale.md) (1086 mots) | [réponse](reponses/08-carte-mentale.md) (2643 mots) |
| 9 | Cercle de parole | [prompt](prompts/09-cercle-de-parole.md) (1043 mots) | [réponse](reponses/09-cercle-de-parole.md) (3206 mots) |
| 10 | Cercle Samoan | [prompt](prompts/10-cercle-samoan.md) (1499 mots) | [réponse](reponses/10-cercle-samoan.md) (3141 mots) |
| 11 | Chifoumi collectif | [prompt](prompts/11-chifoumi-collectif-pierre-feuille-ciseaux.md) (1100 mots) | [réponse](reponses/11-chifoumi-collectif-pierre-feuille-ciseaux.md) (2230 mots) |
| 12 | Débat mouvant | [prompt](prompts/12-debat-mouvant.md) (1333 mots) | [réponse](reponses/12-debat-mouvant.md) (3000 mots) |
| 13 | Décision par consentement | [prompt](prompts/13-decision-par-consentement.md) (1182 mots) | [réponse](reponses/13-decision-par-consentement.md) (3782 mots) |
| 14 | Demande de silence | [prompt](prompts/14-demande-de-silence.md) (1071 mots) | [réponse](reponses/14-demande-de-silence.md) (2798 mots) |
| 15 | Diagramme avec les pieds | [prompt](prompts/15-diagramme-avec-les-pieds.md) (1110 mots) | [réponse](reponses/15-diagramme-avec-les-pieds.md) (2560 mots) |
| 16 | Discussion d’ascenseur | [prompt](prompts/16-discussion-ascenceur.md) (1059 mots) | [réponse](reponses/16-discussion-ascenceur.md) (2378 mots) |
| 17 | Discussion Kanak | [prompt](prompts/17-discussion-kanak.md) (995 mots) | [réponse](reponses/17-discussion-kanak.md) (2376 mots) |
| 18 | Documentation croisée | [prompt](prompts/18-documentation-croisee.md) (1113 mots) | [réponse](reponses/18-documentation-croisee.md) (3515 mots) |
| 19 | Elevator pitch | [prompt](prompts/19-elevator-pitch.md) (1149 mots) | [réponse](reponses/19-elevator-pitch.md) (3057 mots) |
| 20 | Energiseur un à neuf | [prompt](prompts/20-energiseur-un-a-neuf.md) (999 mots) | [réponse](reponses/20-energiseur-un-a-neuf.md) (2336 mots) |
| 21 | Enquête appréciative | [prompt](prompts/21-enquete-appreciative.md) (1117 mots) | [réponse](reponses/21-enquete-appreciative.md) (4699 mots) |
| 22 | Langage silencieux | [prompt](prompts/22-langage-silencieux.md) (1298 mots) | [réponse](reponses/22-langage-silencieux.md) (3181 mots) |
| 23 | Les 3C : Conserver – Cesser – Créer | [prompt](prompts/23-les-3c-conserver-cesser-creer.md) (1092 mots) | [réponse](reponses/23-les-3c-conserver-cesser-creer.md) (3120 mots) |
| 24 | Les animaux de la ferme | [prompt](prompts/24-les-animaux-de-la-ferme.md) (1098 mots) | [réponse](reponses/24-les-animaux-de-la-ferme.md) (2567 mots) |
| 25 | Mandala Holistique | [prompt](prompts/25-mandala-holistique.md) (1294 mots) | [réponse](reponses/25-mandala-holistique.md) (4216 mots) |
| 26 | Marche en aveugle | [prompt](prompts/26-marche-en-aveugle.md) (1083 mots) | [réponse](reponses/26-marche-en-aveugle.md) (2779 mots) |
| 27 | Matrice impact/effort | [prompt](prompts/27-matrice-impact-effort.md) (1115 mots) | [réponse](reponses/27-matrice-impact-effort.md) (3172 mots) |
| 28 | Matrice plus/delta | [prompt](prompts/28-matrice-plus-delta.md) (1111 mots) | [réponse](reponses/28-matrice-plus-delta.md) (3210 mots) |
| 29 | Météo intérieure | [prompt](prompts/29-meteo-interieure.md) (1108 mots) | [réponse](reponses/29-meteo-interieure.md) (2645 mots) |
| 30 | Méthode des personas | [prompt](prompts/30-methode-des-personas.md) (1117 mots) | [réponse](reponses/30-methode-des-personas.md) (3523 mots) |
| 31 | Méthode des post-it | [prompt](prompts/31-methode-des-post-it.md) (1153 mots) | [réponse](reponses/31-methode-des-post-it.md) (2952 mots) |
| 32 | Méthode des six chapeaux | [prompt](prompts/32-six-chapeaux-de-bono.md) (1399 mots) | [réponse](reponses/32-six-chapeaux-de-bono.md) (3445 mots) |
| 33 | Méthode Walt Disney | [prompt](prompts/33-methode-walt-disney.md) (1098 mots) | [réponse](reponses/33-methode-walt-disney.md) (3810 mots) |
| 34 | Mon journal | [prompt](prompts/34-mon-journal.md) (1038 mots) | [réponse](reponses/34-mon-journal.md) (3172 mots) |
| 35 | Panorama des réussites | [prompt](prompts/35-panorama-des-reussites.md) (1108 mots) | [réponse](reponses/35-panorama-des-reussites.md) (3482 mots) |
| 36 | Parole au centre | [prompt](prompts/36-parole-au-centre.md) (1099 mots) | [réponse](reponses/36-parole-au-centre.md) (3529 mots) |
| 37 | Photolangage | [prompt](prompts/37-photolangage.md) (1083 mots) | [réponse](reponses/37-photolangage.md) (2994 mots) |
| 38 | Pomodoro synchrone | [prompt](prompts/38-pomodoro-synchrone.md) (1071 mots) | [réponse](reponses/38-pomodoro-synchrone.md) (3399 mots) |
| 39 | Présentation croisée | [prompt](prompts/39-presentation-croisee.md) (956 mots) | [réponse](reponses/39-presentation-croisee.md) (3022 mots) |
| 40 | Présentations éclair | [prompt](prompts/40-presentations-eclairs.md) (1119 mots) | [réponse](reponses/40-presentations-eclairs.md) (3088 mots) |
| 41 | Respiration collective | [prompt](prompts/41-respiration-collective.md) (1054 mots) | [réponse](reponses/41-respiration-collective.md) (3021 mots) |
| 42 | Rétrospective à 4 questions | [prompt](prompts/42-retrospective-a-4-questions.md) (1128 mots) | [réponse](reponses/42-retrospective-a-4-questions.md) (3791 mots) |
| 43 | Réunion debout | [prompt](prompts/43-reunion-debout.md) (1132 mots) | [réponse](reponses/43-reunion-debout.md) (2832 mots) |
| 44 | Réunion en marchant | [prompt](prompts/44-reunion-en-marchant.md) (1160 mots) | [réponse](reponses/44-reunion-en-marchant.md) (2999 mots) |
| 45 | Souvenir du futur | [prompt](prompts/45-souvenir-du-futur.md) (1144 mots) | [réponse](reponses/45-souvenir-du-futur.md) (4103 mots) |
| 46 | Sprint d’écriture | [prompt](prompts/46-sprint-ecriture.md) (1072 mots) | [réponse](reponses/46-sprint-ecriture.md) (3781 mots) |
| 47 | Tables de découverte | [prompt](prompts/47-tables-de-decouverte.md) (1028 mots) | [réponse](reponses/47-tables-de-decouverte.md) (3113 mots) |
| 48 | Tous dans le même bateau | [prompt](prompts/48-tous-dans-le-meme-bateau.md) (1113 mots) | [réponse](reponses/48-tous-dans-le-meme-bateau.md) (3550 mots) |
| 49 | Tri par affinités | [prompt](prompts/49-tri-par-affinites.md) (1085 mots) | [réponse](reponses/49-tri-par-affinites.md) (3679 mots) |
| 50 | Vote à cinq doigts | [prompt](prompts/50-vote-a-cinq-doigts.md) (1050 mots) | [réponse](reponses/50-vote-a-cinq-doigts.md) (3411 mots) |
| 51 | Vote à points | [prompt](prompts/51-vote-a-points.md) (1080 mots) | [réponse](reponses/51-vote-a-points.md) (3146 mots) |
| 52 | World café | [prompt](prompts/52-world-cafe.md) (1331 mots) | [réponse](reponses/52-world-cafe.md) (4380 mots) |
