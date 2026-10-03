/* Page exemple.html : affiche la réponse d'exemple (dossier Exemples/) de la carte indiquée par ?carte=<slug>. */
(() => {
  'use strict';

  const $ = s => document.querySelector(s);
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const dureeTxt = t => (t || '').replace(/(\d)\s*-\s*(\d)/g, '$1–$2').replace(/(\d)\s*min(utes)?\b/g, '$1 min').replace(/(\d)\s*h\b/g, '$1 h');

  const slug = new URLSearchParams(location.search).get('carte') || '';
  const carte = (window.CARTES || []).find(c => c.slug === slug);
  const ex = window.EXEMPLES || { reponses: {} };
  const fichier = carte && ex.reponses[carte.slug];
  const reponse = $('#reponse');

  const erreur = msg => {
    reponse.innerHTML = `<p class="exemple-etat">${msg} <a href="index.html">Retour à l’explorateur</a>.</p>`;
    document.title = 'Exemple introuvable · Faire Ensemble';
  };

  if (!carte) { erreur('Carte introuvable.'); return; }
  document.title = `${carte.titre} · Exemple de réponse · Faire Ensemble`;
  $('#ex-titre').textContent = carte.titre;
  $('#ex-titre-pied').textContent = carte.titre;
  $('#ex-type').textContent = carte.type === 'recette' ? 'Recette' : 'Ingrédient';
  $('#ex-image').src = carte.image;
  $('#ex-image').alt = `Illustration de la carte ${carte.titre}`;
  $('#lien-carte').href = `index.html#carte/${encodeURIComponent(carte.slug)}`;
  $('#entete').hidden = false;

  if (!fichier) { erreur('Pas d’exemple de réponse pour cette carte.'); return; }

  const infos = carte.infos || {};
  $('#ex-sujet').textContent = ex.sujet;
  $('#ex-public').textContent = ex.publicCible;
  $('#ex-duree').textContent = infos.duree ? `${dureeTxt(infos.duree)} (durée proposée par la carte)` : 'non précisée par la carte (choisie dans la réponse)';
  $('#cas').hidden = false;
  $('#lien-md').href = fichier;
  $('#lien-prompt').href = fichier.replace('/reponses/', '/prompts/');

  fetch(fichier).then(r => { if (!r.ok) throw new Error(r.status); return r.text(); }).then(md => {
    // le titre de niveau 1 de la réponse doublonne avec l'en-tête : il devient un sous-titre
    reponse.innerHTML = marked.parse(md, { gfm: true, breaks: true });   // breaks : un retour à la ligne simple reste un saut de ligne
    reponse.querySelectorAll('h1').forEach(h => { const h2 = document.createElement('h2'); h2.className = 'exemple-h1'; h2.innerHTML = h.innerHTML; h.replaceWith(h2); });
    reponse.querySelectorAll('table').forEach(t => { const d = document.createElement('div'); d.className = 'table-scroll'; t.replaceWith(d); d.append(t); });
    reponse.querySelectorAll('a[href^="http"]').forEach(a => { a.target = '_blank'; a.rel = 'noopener'; });
    $('#pied').hidden = false;
  }).catch(() => erreur(`La réponse n’a pas pu être chargée (${esc(fichier)}).`));

  $('#btn-theme').addEventListener('click', () => {
    const sombre = document.documentElement.dataset.theme
      ? document.documentElement.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    const t = sombre ? 'light' : 'dark';
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem('fe-theme', t); } catch { /* ignoré */ }
  });
  $('#btn-imprimer').addEventListener('click', () => window.print());
})();
