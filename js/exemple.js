/* Page exemple.html : affiche la réponse d'exemple (dossier exemples/) de la carte indiquée par ?carte=<slug>. */
(() => {
  'use strict';

  const $ = s => document.querySelector(s);
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const dureeTxt = t => (t || '').replace(/(\d)\s*-\s*(\d)/g, '$1–$2').replace(/(\d)\s*min(utes)?\b/g, '$1 min').replace(/(\d)\s*h\b/g, '$1 h');

  const params = new URLSearchParams(location.search);
  const slug = params.get('carte') || '';
  // vue : « reponse » (Markdown mis en forme, par défaut), « prompt » (texte du prompt) ou « source » (Markdown brut de la réponse)
  const vue = ['prompt', 'source'].includes(params.get('vue')) ? params.get('vue') : 'reponse';
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
  const fichierPrompt = fichier.replace('/reponses/', '/prompts/');
  $('#ex-sujet').textContent = ex.sujet;
  $('#ex-public').textContent = ex.publicCible;
  $('#ex-duree').textContent = infos.duree ? `${dureeTxt(infos.duree)} (durée proposée par la carte)` : 'non précisée par la carte (choisie dans la réponse)';
  $('#cas').hidden = false;

  // Les fichiers .md sont affichés ici (lus en UTF-8) plutôt qu'ouverts bruts par le navigateur : certains serveurs
  // n'indiquent pas leur encodage, ce qui rend les accents illisibles.
  const lienVue = v => `exemple.html?carte=${encodeURIComponent(carte.slug)}${v === 'reponse' ? '' : `&vue=${v}`}`;
  $('#lien-reponse').href = lienVue('reponse');
  $('#lien-prompt').href = lienVue('prompt');
  $('#lien-md').href = lienVue('source');
  document.querySelectorAll('.exemple-nav a').forEach(a => a.classList.toggle('actif', a.dataset.vue === vue));
  $('#ex-sous-titre').textContent = { reponse: 'Exemple de réponse', prompt: 'Prompt utilisé', source: 'Réponse (Markdown brut)' }[vue];
  $('#ex-lead').textContent = {
    reponse: 'Réponse d’un assistant IA au prompt généré par l’application pour cette carte, à partir du sujet et du public ci-dessous.',
    prompt: 'Texte exact du prompt généré par l’application pour cette carte, avec le sujet et le public ci-dessous. C’est ce texte qui a produit l’exemple de réponse.',
    source: 'Le fichier Markdown de la réponse, tel qu’il est enregistré dans le dossier exemples.'
  }[vue];

  const charger = f => fetch(f).then(r => { if (!r.ok) throw new Error(r.status); return r.text(); });
  const brut = (texte, f, libelle) => {
    reponse.innerHTML = `<div class="exemple-outils">
        <button class="btn btn-outline" type="button" id="btn-copier">Copier le texte</button>
        <a class="btn btn-ghost" href="${esc(f)}" download>Télécharger le fichier .md</a>
      </div>
      <pre class="exemple-brut" tabindex="0" aria-label="${esc(libelle)}"></pre>`;
    reponse.querySelector('pre').textContent = texte;
    $('#btn-copier').addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(texte); $('#btn-copier').textContent = 'Copié !'; }
      catch { $('#btn-copier').textContent = 'Copie impossible : sélectionnez le texte'; }
      setTimeout(() => { $('#btn-copier').textContent = 'Copier le texte'; }, 2000);
    });
  };

  const chargement = vue === 'prompt'
    ? charger(fichierPrompt).then(t => brut(t, fichierPrompt, 'Prompt utilisé'))
    : vue === 'source'
      ? charger(fichier).then(t => brut(t, fichier, 'Markdown brut de la réponse'))
      : charger(fichier).then(md => {
        // le titre de niveau 1 de la réponse doublonne avec l'en-tête : il devient un sous-titre
        reponse.innerHTML = marked.parse(md, { gfm: true, breaks: true });   // breaks : un retour à la ligne simple reste un saut de ligne
        reponse.querySelectorAll('h1').forEach(h => { const h2 = document.createElement('h2'); h2.className = 'exemple-h1'; h2.innerHTML = h.innerHTML; h.replaceWith(h2); });
        reponse.querySelectorAll('table').forEach(t => { const d = document.createElement('div'); d.className = 'table-scroll'; t.replaceWith(d); d.append(t); });
        reponse.querySelectorAll('a[href^="http"]').forEach(a => { a.target = '_blank'; a.rel = 'noopener'; });
      });
  chargement.then(() => { $('#pied').hidden = false; })
    .catch(() => erreur(`Le fichier n’a pas pu être chargé (${esc(vue === 'prompt' ? fichierPrompt : fichier)}).`));

  $('#btn-theme').addEventListener('click', () => {
    const sombre = document.documentElement.dataset.theme
      ? document.documentElement.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    const t = sombre ? 'light' : 'dark';
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem('fe-theme', t); } catch { /* ignoré */ }
  });
  $('#btn-imprimer').addEventListener('click', () => window.print());
})();
