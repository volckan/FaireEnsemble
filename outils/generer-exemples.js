// Reconstruit js/exemples.js et exemples/README.md à partir du contenu du dossier exemples/
// (exemples/prompts/<nn>-<slug>.md et exemples/reponses/<nn>-<slug>.md).
// Usage : node outils/generer-exemples.js
const fs = require('fs'), path = require('path');
const repo = path.resolve(__dirname, '..');
const w = {}; new Function('window', fs.readFileSync(path.join(repo, 'js/data.js'), 'utf8'))(w);
const titre = Object.fromEntries(w.CARTES.map(c => [c.slug, c.titre]));
const mots = t => t.split(/\s+/).filter(Boolean).length;
const fichiers = fs.readdirSync(path.join(repo, 'exemples/reponses')).filter(f => /^\d+-.+\.md$/.test(f)).sort();
const lignes = [], reponses = {};
for (const f of fichiers) {
  const slug = f.replace(/^\d+-/, '').replace(/\.md$/, '');
  if (!titre[slug]) { console.warn('carte inconnue, ignorée :', f); continue; }
  const r = fs.readFileSync(path.join(repo, 'exemples/reponses', f), 'utf8');
  const pf = path.join(repo, 'exemples/prompts', f);
  const p = fs.existsSync(pf) ? fs.readFileSync(pf, 'utf8') : '';
  reponses[slug] = `exemples/reponses/${f}`;
  lignes.push(`| ${Number(f.split('-')[0])} | ${titre[slug]} | ${p ? `[prompt](prompts/${f}) (${mots(p)} mots)` : '—'} | [réponse](reponses/${f}) (${mots(r)} mots) |`);
}
const sujet = 'Comment améliorer les interactions dans une formation d’adultes ?', publicCible = 'Formateurs d’adultes';
fs.writeFileSync(path.join(repo, 'js/exemples.js'), `/* Exemples de réponses aux prompts (dossier exemples/) : un même cas d'usage appliqué à chaque carte recette.
   Fichier GÉNÉRÉ par outils/generer-exemples.js ; la page exemple.html affiche la réponse d'une carte. */

window.EXEMPLES = {
  sujet: ${JSON.stringify(sujet)},
  publicCible: ${JSON.stringify(publicCible)},
  reponses: {
${Object.entries(reponses).map(([s, f]) => `  ${JSON.stringify(s)}: ${JSON.stringify(f)}`).join(',\n')}
  }
};
`);
fs.writeFileSync(path.join(repo, 'exemples/README.md'), `# Exemples de prompts et de réponses

Ce dossier sert à juger la qualité des prompts générés par l’application, à partir d’un même cas d’usage
appliqué aux cartes « recette » (dans l’ordre de l’accueil).

- **Sujet de discussion ou problématique** : « ${sujet} »
- **Public qui jouera l’activité** : « ${publicCible} »
- **Durée** : celle proposée par défaut par la carte (champ laissé tel quel).

Pour chaque carte :

- \`prompts/<nn>-<slug>.md\` : le prompt exactement tel que l’application le génère (bouton « Générer le prompt »).
- \`reponses/<nn>-<slug>.md\` : la réponse produite par un assistant IA à partir de ce seul prompt, sans retouche.

Les réponses sont des exemples bruts, générés automatiquement : elles ne sont ni relues ni validées
par un·e facilitateur·rice et peuvent contenir des approximations.

Pour régénérer l’index ci-dessous et \`js/exemples.js\` après avoir ajouté ou modifié des fichiers :
\`node outils/generer-exemples.js\`. Pour réextraire les prompts après une modification du générateur de prompt :
\`node outils/extraire-prompts.js\`.

| N° | Carte | Prompt | Réponse |
|---:|---|---|---|
${lignes.join('\n')}
`);
console.log('exemples :', lignes.length, 'cartes → js/exemples.js et exemples/README.md');
