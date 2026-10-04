(() => {
  'use strict';

  /* ================================================================ Données */

  const OBJECTIFS = window.OBJECTIFS;
  const SYNTHESES = window.SYNTHESES || {};
  const OBJ = Object.fromEntries(OBJECTIFS.map(o => [o.id, o]));

  const DUREES = [
    { id: 'express',  label: '≤ 15 min',          lo: 0,   hi: 15 },
    { id: 'court',    label: '15 min – 1 h',      lo: 15,  hi: 60 },
    { id: 'long',     label: '1 h – 2 h',         lo: 60,  hi: 120 },
    { id: 'atelier',  label: 'Plus de 2 h',       lo: 120, hi: Infinity },
    { id: 'variable', label: 'Variable / en continu' }
  ];
  const TAILLES = [
    { id: 'petit', label: 'Petit' },
    { id: 'moyen', label: 'Moyen' },
    { id: 'grand', label: 'Grand' }
  ];
  const COMPLEXITES = [
    { id: 1, label: 'Simple' },
    { id: 2, label: 'Intermédiaire' },
    { id: 3, label: 'Avancée' }
  ];
  const TYPES = [
    { id: 'recette', label: 'Recettes' },
    { id: 'ingredient', label: 'Ingrédients' }
  ];

  /** Minuscules, sans accents ni ponctuation. */
  const plain = s => (s || '').toLowerCase().normalize('NFD').replace(/\p{M}/gu, '')
    .replace(/œ/g, 'oe').replace(/[^a-z0-9]+/g, ' ').trim();
  /** Forme utilisée pour reconnaître un nom de carte (pluriels ignorés). */
  const key = s => plain(s).split(' ').map(w => w.length > 3 ? w.replace(/s$/, '') : w).join(' ');
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  /** Rééquilibre les balises d'un fragment HTML (certaines cartes ont un <div> ouvert dans l'intro et fermé
      dans une autre rubrique, ce qui déformait la fiche). */
  const equilibrer = html => { const t = document.createElement('template'); t.innerHTML = html; return t.innerHTML; };
  const liensAjoutes = slug => {
    const urls = window.SOURCES_AJOUTEES[slug];
    return urls ? `<ul>${urls.map(u => `<li><a href="${esc(u)}">${esc(u)}</a></li>`).join(' ')}</ul>` : '';
  };
  const CHAMPS_HTML = ['intro', 'pourquoi', 'essentiel', 'astuces', 'variantes', 'detail', 'experts', 'questions', 'strategies', 'exemples'];
  const textOf = html => { const d = document.createElement('div'); d.innerHTML = html || ''; return d.textContent.replace(/\s+/g, ' ').trim(); };

  function parseDuree(txt) {
    if (!txt) return null;
    const t = txt.toLowerCase().replace(',', '.');
    const unit = u => (u.startsWith('h') ? 60 : 1);
    let m = t.match(/(\d+(?:\.\d+)?)\s*(?:-|–|à)\s*(\d+(?:\.\d+)?)\s*(min|h)/);
    if (m) return [m[1] * unit(m[3]), m[2] * unit(m[3])];
    m = t.match(/(\d+(?:\.\d+)?)\s*(min|h)/);
    if (m) return [m[1] * unit(m[2]), m[1] * unit(m[2])];
    return null;
  }
  const dureeTxt = t => (t || '').replace(/(\d)\s*-\s*(\d)/g, '$1–$2').replace(/(\d)\s*min(utes)?\b/g, '$1 min').replace(/(\d)\s*h\b/g, '$1 h');
  const tailleTxt = arr => {
    if (!arr || !arr.length) return '';
    if (arr.length === 3) return 'Toutes tailles';
    if (arr.length === 1) return cap(arr[0]);
    return `${cap(arr[0])} à ${arr[arr.length - 1]}`;
  };

  const CARTES = window.CARTES.map(c => {
    const infos = c.infos || {};
    const objectifs = window.CLASSEMENT[c.slug] || [];
    const plage = window.DUREES_MANUELLES[c.slug] || parseDuree(infos.duree);
    const materiel = (infos.materiel || '').trim();
    const carte = {
      ...c,
      ...Object.fromEntries(CHAMPS_HTML.filter(k => c[k]).map(k => [k, equilibrer(c[k])])),
      autres: c.autres && c.autres.map(a => ({ ...a, html: equilibrer(a.html) })),
      // cartes sans lien : sources choisies pour l'application (classement.js)
      detail: c.detail || liensAjoutes(c.slug),
      sourcesAjoutees: !c.detail && !!window.SOURCES_AJOUTEES[c.slug],
      objectifs,
      plage,
      taille: infos.taille || [],
      complexite: infos.complexite || null,
      sansMateriel: c.type === 'recette' && (!materiel || /^espace/.test(materiel)),
    };
    const motsObj = objectifs.map(id => `${OBJ[id].label} ${OBJ[id].mots || ''}`).join(' ');
    carte._titre = plain(c.titre);
    carte._fort = plain([c.resume, textOf(c.pourquoi), motsObj].join(' '));
    carte._reste = plain([textOf(c.essentiel), textOf(c.astuces), textOf(c.variantes), infos.ingredients,
      materiel, infos.lieu, c.formats, textOf(c.questions), textOf(c.strategies)].join(' '));
    return carte;
  });
  const PAR_SLUG = Object.fromEntries(CARTES.map(c => [c.slug, c]));
  const collator = new Intl.Collator('fr', { sensitivity: 'base', numeric: true });
  const alpha = (a, b) => collator.compare(a.titre, b.titre);

  // Index des noms de cartes pour créer des liens automatiques.
  const NOMS = [];
  for (const c of CARTES) {
    NOMS.push([key(c.titre), c.slug]);
    for (const a of window.ALIAS[c.slug] || []) NOMS.push([key(a), c.slug]);
  }
  NOMS.sort((a, b) => b[0].length - a[0].length);
  function trouverCarte(texte, sauf) {
    const k = ` ${key(texte)} `;
    for (const [nom, slug] of NOMS) if (slug !== sauf && k.includes(` ${nom} `)) return PAR_SLUG[slug];
    return null;
  }

  /* ================================================================== État */

  // Par défaut, seules les recettes sont affichées (le type « Ingrédients » se coche dans les filtres).
  const TYPES_DEFAUT = ['recette'];
  const etat = {
    q: '',
    objectifs: new Set(), durees: new Set(), tailles: new Set(), complexites: new Set(), types: new Set(TYPES_DEFAUT),
    sansMateriel: false, favoris: false, tri: 'pertinence'
  };
  let resultats = [];

  const stock = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* stockage indisponible */ } }
  };
  const favoris = new Set(stock.get('fe-favoris', []));

  /* ======================================================= État dans l'URL */

  // Les filtres vivent dans la partie « ?… » de l'adresse (la carte ouverte reste dans « #carte/… ») :
  // une sélection se partage par simple lien et survit au rechargement. Une clé absente vaut la valeur par défaut.
  const URL_CLES = { objectifs: 'obj', durees: 'duree', tailles: 'taille', complexites: 'cplx', types: 'type' };
  const URL_TOUTES = ['q', ...Object.values(URL_CLES), 'sans', 'fav', 'tri'];
  const URL_VALIDES = { objectifs: OBJECTIFS.map(o => o.id), durees: DUREES.map(d => d.id), tailles: TAILLES.map(t => t.id), complexites: COMPLEXITES.map(c => String(c.id)), types: TYPES.map(t => t.id) };

  function etatVersUrl() {
    const p = new URLSearchParams(location.search);
    URL_TOUTES.forEach(k => p.delete(k));   // les autres paramètres éventuels sont conservés
    if (etat.q) p.set('q', etat.q);
    for (const [g, k] of Object.entries(URL_CLES)) {
      const v = [...etat[g]].map(String);
      if (g === 'types') { if (v.join(',') !== TYPES_DEFAUT.join(',')) p.set(k, v.length ? v.join(',') : 'tous'); }
      else if (v.length) p.set(k, v.join(','));
    }
    if (etat.sansMateriel) p.set('sans', '1');
    if (etat.favoris) p.set('fav', '1');
    if (etat.tri !== 'pertinence') p.set('tri', etat.tri);
    const s = p.toString().replace(/%2C/g, ',');
    const url = location.pathname + (s ? `?${s}` : '') + location.hash;
    if (url !== location.pathname + location.search + location.hash) history.replaceState(history.state, '', url);
  }

  function urlVersEtat() {
    const p = new URLSearchParams(location.search);
    if (!URL_TOUTES.some(k => p.has(k))) return;   // rien dans l'adresse : état par défaut
    etat.q = (p.get('q') || '').trim();
    for (const [g, k] of Object.entries(URL_CLES)) {
      etat[g].clear();
      const brut = p.get(k);
      if (brut == null) { if (g === 'types') TYPES_DEFAUT.forEach(t => etat.types.add(t)); continue; }
      if (g === 'types' && brut === 'tous') continue;
      brut.split(',').filter(v => URL_VALIDES[g].includes(v)).forEach(v => etat[g].add(g === 'complexites' ? Number(v) : v));
    }
    etat.sansMateriel = p.get('sans') === '1';
    etat.favoris = p.get('fav') === '1';
    etat.tri = [...el.tri.options].some(o => o.value === p.get('tri')) ? p.get('tri') : 'pertinence';
    el.recherche.value = etat.q;
    el.tri.value = etat.tri;
    el.sansMateriel.checked = etat.sansMateriel;
    el.favoris.checked = etat.favoris;
  }

  /* ============================================================== Filtrage */

  const tokens = () => plain(etat.q).split(' ').filter(Boolean);

  const TESTS = {
    q: c => tokens().every(t => c._titre.includes(t) || c._fort.includes(t) || c._reste.includes(t)),
    objectifs: c => !etat.objectifs.size || c.objectifs.some(o => etat.objectifs.has(o)),
    durees: c => !etat.durees.size || [...etat.durees].some(id => dureeCorrespond(c, id)),
    tailles: c => !etat.tailles.size || c.taille.some(t => etat.tailles.has(t)),
    complexites: c => !etat.complexites.size || etat.complexites.has(c.complexite),
    types: c => !etat.types.size || etat.types.has(c.type),
    sansMateriel: c => !etat.sansMateriel || c.sansMateriel,
    favoris: c => !etat.favoris || favoris.has(c.slug)
  };
  function dureeCorrespond(c, id) {
    const d = DUREES.find(x => x.id === id);
    if (id === 'variable') return c.type === 'recette' && !c.plage;
    return !!c.plage && c.plage[0] < d.hi && c.plage[1] > d.lo;
  }
  const passe = (c, sauf) => Object.entries(TESTS).every(([g, test]) => g === sauf || test(c));

  function score(c) {
    const ts = tokens();
    let s = 0;
    for (const t of ts) {
      if (c._titre.startsWith(t)) s += 30;
      if (c._titre.includes(t)) s += 20;
      if (c._fort.includes(t)) s += 6;
      if (c._reste.includes(t)) s += 1;
    }
    return s;
  }

  function trier(liste) {
    const typeOrdre = c => (c.type === 'recette' ? 0 : 1);
    const cmp = {
      pertinence: (a, b) => (etat.q ? score(b) - score(a) : 0) || typeOrdre(a) - typeOrdre(b) || alpha(a, b),
      alpha: alpha,
      simple: (a, b) => (a.complexite ?? 9) - (b.complexite ?? 9) || alpha(a, b),
      court: (a, b) => (a.plage ? a.plage[0] : 1e9) - (b.plage ? b.plage[0] : 1e9) || alpha(a, b)
    }[etat.tri];
    return liste.slice().sort(cmp);
  }

  /* ================================================================== Rendu */

  const $ = s => document.querySelector(s);
  const el = {
    objectifs: $('#objectifs'), duree: $('#f-duree'), taille: $('#f-taille'), complexite: $('#f-complexite'),
    type: $('#f-type'), sansMateriel: $('#f-sans-materiel'), favoris: $('#f-favoris'), nbFavoris: $('#nb-favoris'),
    recherche: $('#recherche'), tri: $('#tri'), grille: $('#grille'), vide: $('#vide'), compteur: $('#compteur'),
    actifs: $('#filtres-actifs'), nbFiltres: $('#nb-filtres'), filtres: $('#filtres'), fondFiltres: $('#filtres-fond'),
    fiche: $('#fiche'), ficheContenu: $('#fiche-contenu'), fichePos: $('#fiche-pos'), apropos: $('#apropos'), qr: $('#qr'), qrCode: $('#qr-code'), qrUrl: $('#qr-url'), toast: $('#toast'),
    anim: $('#animation'), animTemps: $('#anim-temps'), animDuree: $('#anim-duree'),
    deroule: $('#deroule'), derouleListe: $('#deroule-liste'), derouleTotal: $('#deroule-total'), derouleSugg: $('#deroule-suggestions'), derouleActions: $('#deroule-actions'), nbDeroule: $('#nb-deroule')
  };

  const icone = (id, cls = 'i') => `<svg class="${cls}" aria-hidden="true"><use href="#i-${id}"/></svg>`;
  const points = n => `<span class="dots" aria-label="Complexité ${n} sur 3">${[1, 2, 3].map(i => `<i class="${i <= n ? 'on' : ''}"></i>`).join('')}</span>`;

  /** Surligne les termes recherchés (insensible aux accents). */
  function surligner(texteHtml) {
    const ts = tokens().filter(t => t.length > 1);
    if (!ts.length) return texteHtml;
    const classes = { a: 'aàâä', e: 'eéèêë', i: 'iîï', o: 'oôöœ', u: 'uùûü', c: 'cç', y: 'yÿ' };
    const motif = ts.map(t => [...t].map(ch => classes[ch] ? `[${classes[ch]}]` : ch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('')).join('|');
    const re = new RegExp(`(${motif})`, 'gi');
    return texteHtml.replace(/(<[^>]+>)|([^<]+)/g, (m, tag, txt) => tag || txt.replace(re, '<mark>$1</mark>'));
  }

  function chipsGroupe(conteneur, groupe, options, contenu) {
    conteneur.innerHTML = options.map(o => {
      const actif = etat[groupe].has(o.id);
      const n = CARTES.filter(c => passe(c, groupe) && testOption(groupe, o.id, c)).length;
      return `<button type="button" class="opt" data-groupe="${groupe}" data-id="${o.id}" aria-pressed="${actif}" ${!n && !actif ? 'disabled' : ''}>${contenu ? contenu(o) : esc(o.label)}<span class="n">${n}</span></button>`;
    }).join('');
  }
  function testOption(groupe, id, c) {
    switch (groupe) {
      case 'objectifs': return c.objectifs.includes(id);
      case 'durees': return dureeCorrespond(c, id);
      case 'tailles': return c.taille.includes(id);
      case 'complexites': return c.complexite === id;
      case 'types': return c.type === id;
    }
  }

  function rendreFacettes() {
    el.objectifs.innerHTML = OBJECTIFS.map(o => {
      const actif = etat.objectifs.has(o.id);
      const n = CARTES.filter(c => passe(c, 'objectifs') && c.objectifs.includes(o.id)).length;
      return `<button type="button" class="obj-chip" style="--c:${o.couleur}" data-groupe="objectifs" data-id="${o.id}" aria-pressed="${actif}" ${!n && !actif ? 'disabled' : ''}>
        <span class="dot"></span>${esc(o.label)}<span class="n">${n}</span></button>`;
    }).join('');
    chipsGroupe(el.duree, 'durees', DUREES);
    chipsGroupe(el.taille, 'tailles', TAILLES);
    chipsGroupe(el.complexite, 'complexites', COMPLEXITES, o => `${points(o.id)} ${esc(o.label)}`);
    chipsGroupe(el.type, 'types', TYPES);
    el.nbFavoris.textContent = favoris.size;
  }

  function tuile(c, i) {
    const couleurs = c.objectifs.map(id => OBJ[id].couleur);
    const meta = [];
    if (c.type === 'recette') {
      meta.push(`<span title="Durée">${icone('clock')}${esc(c.infos?.duree ? dureeTxt(c.infos.duree) : 'Variable')}</span>`);
      if (c.taille.length) meta.push(`<span title="Taille du groupe">${icone('users')}${esc(tailleTxt(c.taille))}</span>`);
      if (c.complexite) meta.push(`<span title="Complexité : ${COMPLEXITES[c.complexite - 1].label}">${points(c.complexite)}</span>`);
    } else {
      meta.push(`<span>${icone('flask')}Ingrédient : un principe clé pour concevoir vos formats</span>`);
    }
    const fav = favoris.has(c.slug);
    return `<article class="tile" style="animation-delay:${Math.min(i, 12) * 18}ms">
      <a class="tile-link" href="#carte/${c.slug}" data-slug="${c.slug}">
        <div class="tile-bar">${couleurs.map(k => `<span style="background:${k}"></span>`).join('')}</div>
        <div class="tile-art"><img src="${c.image}" alt="" loading="lazy" width="400" height="400"></div>
        <div class="tile-body">
          <div class="tile-kind">${c.objectifs.map(id => `<span class="tag" style="--c:${OBJ[id].couleur}">${esc(OBJ[id].court)}</span>`).join('')}</div>
          <h3>${surligner(esc(c.titre))}</h3>
          <p class="tile-resume">${surligner(esc(c.resume))}</p>
          <div class="tile-meta">${meta.join('')}</div>
        </div>
      </a>
      <span class="tile-num" title="Carte ${i + 1} sur ${resultats.length}" aria-hidden="true">${i + 1}</span>
      ${c.type === 'recette' ? `<button type="button" class="ajout" data-ajout="${c.slug}" aria-pressed="${dansDeroule(c.slug)}" aria-label="${dansDeroule(c.slug) ? 'Retirer du' : 'Ajouter au'} déroulé : ${esc(c.titre)}" title="${dansDeroule(c.slug) ? 'Retirer du déroulé' : 'Ajouter au déroulé'}">${icone('plus')}</button>` : ''}
      <button type="button" class="fav" data-fav="${c.slug}" aria-pressed="${fav}" aria-label="${fav ? 'Retirer des' : 'Ajouter aux'} favoris : ${esc(c.titre)}" title="${fav ? 'Retirer des favoris' : 'Ajouter aux favoris'}">${icone('star')}</button>
    </article>`;
  }

  function rendreActifs() {
    const pills = [];
    const pill = (groupe, id, label) => pills.push(`<button type="button" class="pill" data-retirer="${groupe}" data-id="${id}">${esc(label)}${icone('x')}</button>`);
    if (etat.q) pill('q', '', `« ${etat.q} »`);
    etat.objectifs.forEach(id => pill('objectifs', id, OBJ[id].label));
    etat.durees.forEach(id => pill('durees', id, DUREES.find(d => d.id === id).label));
    etat.tailles.forEach(id => pill('tailles', id, `${cap(id)} groupe`));
    etat.complexites.forEach(id => pill('complexites', id, `Complexité : ${COMPLEXITES[id - 1].label.toLowerCase()}`));
    etat.types.forEach(id => pill('types', id, TYPES.find(t => t.id === id).label));
    if (etat.sansMateriel) pill('sansMateriel', '', 'Sans matériel');
    if (etat.favoris) pill('favoris', '', 'Mes favoris');
    if (pills.length > 1) pills.push(`<button type="button" class="pill pill-clear" data-action="reinit">Tout effacer</button>`);
    if (pills.length) pills.push(`<button type="button" class="pill pill-clear" data-action="copier-selection" title="Copier l’adresse de cette sélection de cartes">${icone('link')}Copier le lien</button>`);
    el.actifs.innerHTML = pills.join('');
    const nb = etat.objectifs.size + etat.durees.size + etat.tailles.size + etat.complexites.size + etat.types.size + etat.sansMateriel + etat.favoris;
    el.nbFiltres.textContent = nb;
    el.nbFiltres.hidden = !nb;
  }

  function rendre() {
    resultats = trier(CARTES.filter(c => passe(c)));
    rendreFacettes();
    rendreActifs();
    el.grille.innerHTML = resultats.map(tuile).join('');
    el.vide.hidden = resultats.length > 0;
    // « 52 recettes » plutôt que « 52 cartes » quand un seul type est filtré
    const typeSeul = etat.types.size === 1 ? [...etat.types][0] : null;
    const total = typeSeul ? CARTES.filter(c => c.type === typeSeul).length : CARTES.length;
    const nom = { recette: 'recette', ingredient: 'ingrédient' }[typeSeul] || 'carte';
    const n = resultats.length;
    el.compteur.innerHTML = n === total
      ? `<strong>${total}</strong> ${nom}${total > 1 ? 's' : ''}`
      : `<strong>${n}</strong> ${nom}${n > 1 ? 's' : ''} sur ${total}`;
    etatVersUrl();
  }

  /* ================================================================= Fiche */

  const RE_ETAPE = /^\s*(\d+)\s*[.)]\s*/;

  /** Transforme les lignes « 1. … » en liste d'étapes numérotées. */
  function etapes(html) {
    const tpl = document.createElement('template');
    tpl.innerHTML = html;
    const lignes = [];
    for (const node of [...tpl.content.childNodes]) {
      if (node.nodeType === 1 && node.tagName === 'P') {
        node.innerHTML.split(/<br\s*\/?>/i).map(l => l.trim()).filter(Boolean).forEach(l => lignes.push({ html: l }));
      } else if (node.nodeType === 1) {
        lignes.push({ bloc: node.outerHTML });
      } else if (node.textContent.trim()) {
        lignes.push({ html: esc(node.textContent.trim()) });
      }
    }
    for (const l of lignes) {
      if (l.bloc) continue;
      const m = textOf(l.html).match(RE_ETAPE);
      if (m) { l.n = m[1]; l.html = l.html.replace(/^((?:\s*<[^>]+>)*)\s*\d+\s*[.)]\s*/, '$1'); }
    }
    if (lignes.filter(l => l.n != null).length < 2) return html;
    let out = '', ol = false;
    for (const l of lignes) {
      if (l.n != null) {
        if (!ol) { out += '<ol class="steps">'; ol = true; }
        out += `<li data-n="${l.n}"><span>${l.html}</span></li>`;
      } else {
        if (ol) { out += '</ol>'; ol = false; }
        out += l.bloc || `<p>${l.html}</p>`;
      }
    }
    if (ol) out += '</ol>';
    return out;
  }

  /** Met en forme les noms en MAJUSCULES (concepts) et les relie aux cartes existantes. */
  const MAJ = /\p{Lu}[\p{Lu}\d’'\-\/]+s?(?!\p{Ll})(?:[  ]+\p{Lu}[\p{Lu}\d’'\-\/]*s?(?!\p{Ll}))*/gu;
  function decorer(racine, sauf) {
    const walker = document.createTreeWalker(racine, NodeFilter.SHOW_TEXT, {
      acceptNode: n => (n.parentElement.closest('a, .concept') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT)
    });
    const noeuds = [];
    while (walker.nextNode()) noeuds.push(walker.currentNode);
    for (const n of noeuds) {
      const txt = n.nodeValue;
      MAJ.lastIndex = 0;
      if (!MAJ.test(txt)) continue;
      MAJ.lastIndex = 0;
      const frag = document.createDocumentFragment();
      let dernier = 0, m;
      while ((m = MAJ.exec(txt))) {
        const seg = m[0];
        if ((seg.match(/\p{Lu}/gu) || []).length < 3) continue;
        frag.append(txt.slice(dernier, m.index));
        const cible = trouverCarte(seg, sauf);
        let e;
        if (cible) {
          e = document.createElement('a');
          e.href = `#carte/${cible.slug}`;
          e.title = `Voir la carte « ${cible.titre} »`;
        } else {
          e = document.createElement('span');
        }
        e.className = 'concept';
        e.textContent = seg;
        frag.append(e);
        dernier = m.index + seg.length;
      }
      frag.append(txt.slice(dernier));
      n.replaceWith(frag);
    }
  }

  function lienExterne(a) {
    let host = a.href, chemin = '';
    try {
      const u = new URL(a.href);
      host = u.hostname.replace(/^www\./, '');
      const segs = u.pathname.split('/').filter(Boolean);
      chemin = decodeURIComponent(segs.pop() || u.hash.replace(/^#/, '').split('/').pop() || '').replace(/\.(md|html?|php|pdf)$/i, '').replace(/[_-]+/g, ' ');
      if (u.search && !chemin) chemin = decodeURIComponent(u.search.slice(1));
    } catch { /* URL invalide */ }
    const libelle = a.textContent.trim();
    const texte = libelle && !/^https?:|^www\./.test(libelle) && libelle !== host ? libelle : chemin;
    return `<li><a href="${esc(a.href)}" target="_blank" rel="noopener"><span class="host">${esc(host)}</span><span class="path">${esc(texte)}</span>${icone('external')}</a></li>`;
  }

  /** Section « La méthode en détail », repliée par défaut : le titre déplie la synthèse des ressources
      (js/syntheses.js) puis la liste de liens de la carte. */
  function sectionDetail(c) {
    const synthese = SYNTHESES[c.slug];
    if (!c.detail && !synthese) return '';
    return `<section class="f-sec f-detail"><div class="callout callout-detail"><details class="detail">
      <summary><h3>${icone('external')}La méthode en détail${icone('right', 'i chev')}</h3></summary>
      ${synthese ? `<div class="prose synthese-corps">${synthese}</div>` : ''}
      ${c.detail ? `<h4 class="sources">${c.sourcesAjoutees ? 'Sources (choisies pour cette application)' : 'Sources'}&nbsp;:</h4>${sectionLiens(c.detail)}` : ''}
    </details></div></section>`;
  }

  /** Section « La méthode en détail » : liste de liens si le contenu n'est composé que de liens. */
  function sectionLiens(html) {
    const d = document.createElement('div');
    d.innerHTML = html;
    const liens = [...d.querySelectorAll('a[href^="http"]')];
    const reste = textOf(html).replace(/\s/g, '').length - liens.reduce((n, a) => n + a.textContent.replace(/\s/g, '').length, 0);
    if (liens.length && reste < 12) return `<ul class="links">${liens.map(lienExterne).join('')}</ul>`;
    return `<div class="prose">${html}</div>`;
  }

  function formatsLies(txt, sauf) {
    const chips = [], phrases = [];
    for (const part of txt.split(/[,;]/).map(s => s.trim()).filter(Boolean)) {
      const carte = trouverCarte(part, sauf);
      const phrase = /\p{Ll}{3,}/u.test(part.replace(/^(le|la|les|l’|l')\s*/i, ''));
      if (phrase) { phrases.push(`<p>${esc(part.replace(/,\s*$/, ''))}</p>`); continue; }
      chips.push(carte
        ? `<a href="#carte/${carte.slug}"><img src="${carte.image}" alt="">${esc(carte.titre)}</a>`
        : `<span title="Format non présent dans ce jeu">${esc(cap(part.toLowerCase()))}</span>`);
    }
    return (phrases.length ? `<div class="prose">${phrases.join('')}</div>` : '') +
      (chips.length ? `<div class="related"${phrases.length ? ' style="margin-top:10px"' : ''}>${chips.join('')}</div>` : '');
  }

  const section = (titre, ic, corps, cls = '') => corps ? `<section class="f-sec ${cls}"><h3>${icone(ic)}${titre}</h3>${corps}</section>` : '';
  const prose = html => html ? `<div class="prose">${html}</div>` : '';

  function contenuFiche(c) {
    const infos = c.infos || {};
    const tags = c.objectifs.map(id => `<span class="tag" style="--c:${OBJ[id].couleur}">${esc(OBJ[id].label)}</span>`).join('');
    let faits = '';
    if (c.type === 'recette') {
      const fait = (ic, dt, dd, cls = '') => `<div class="fact ${cls}">${icone(ic)}<dl style="margin:0"><dt>${dt}</dt><dd>${dd}</dd></dl></div>`;
      faits = `<div class="facts">
        ${fait('clock', 'Durée', infos.duree ? esc(dureeTxt(infos.duree)) : '<span class="muted">Variable</span>')}
        ${fait('users', 'Taille du groupe', c.taille.length ? esc(c.taille.map(cap).join(' · ')) : '<span class="muted">Non précisée</span>')}
        ${fait('gauge', 'Complexité', c.complexite ? `${points(c.complexite)} ${COMPLEXITES[c.complexite - 1].label}` : '—')}
        ${fait('box', 'Matériel', infos.materiel ? esc(cap(infos.materiel)) : '<span class="muted">Aucun matériel particulier</span>', infos.materiel && infos.materiel.length > 40 ? 'wide' : '')}
        ${infos.lieu ? fait('pin', 'Lieu', esc(cap(infos.lieu)), 'wide') : ''}
      </div>`;
    }

    const rendreAutres = liste => liste.map(a => section(esc(a.titre), 'book', prose(a.html))).join('');
    const reflexion = (c.autres || []).filter(a => /^Éléments/.test(a.titre));
    const autres = rendreAutres((c.autres || []).filter(a => !reflexion.includes(a)));
    const corps = c.type === 'recette'
      ? [
          c.pourquoi ? `<section class="f-sec"><div class="callout callout-pourquoi"><h3>${icone('target')}Pourquoi faire ?</h3>${prose(c.pourquoi)}</div></section>` : '',
          section('L’essentiel', 'list', prose(c.essentiel && etapes(c.essentiel))),
          c.astuces ? `<section class="f-sec"><div class="callout callout-astuces"><h3>${icone('bulb')}Astuces, conseils, points de vigilance</h3>${prose(etapes(c.astuces))}</div></section>` : '',
          sectionDetail(c),
          section('Variantes', 'shuffle', prose(c.variantes && etapes(c.variantes))),
          section('Ingrédients clés', 'flask', infos.ingredients ? prose(`<p>${esc(infos.ingredients)}</p>`) : '', 'f-ingredients'),
          section('Formats liés', 'compass', c.formats ? formatsLies(c.formats, c.slug) : '', 'f-formats'),
          sectionEnchainements(c),
          autres,
          section('Experts, communauté de pratique', 'users', prose(c.experts))
        ]
      : [
          section('Questions à se poser', 'question', prose(c.questions)),
          rendreAutres(reflexion),
          section('Stratégies', 'compass', prose(c.strategies)),
          section('Exemples', 'list', prose(c.exemples)),
          autres,
          section('Experts et communautés de pratique', 'users', prose(c.experts))
        ];

    return `
      <header class="f-head">
        <div class="f-art"><img src="${c.image}" alt="Illustration de la carte ${esc(c.titre)}"></div>
        <div>
          <div class="f-kind"><span class="type">${c.type === 'recette' ? 'Recette' : 'Ingrédient'}</span>${tags}</div>
          <h2 id="fiche-titre">${esc(c.titre)}</h2>
          <div class="f-lead">${c.intro}</div>
        </div>
      </header>
      ${faits}
      <div class="f-sections">${corps.join('')}${sectionPrompt(c)}</div>
      <footer class="f-foot">
        <span>« ${esc(c.titre)} » – Lilian Ricaud et Mélanie Lacayrouze / Métacartes – <a href="https://creativecommons.org/licenses/by-sa/3.0/fr/" target="_blank" rel="noopener">CC BY-SA 3.0 FR</a></span>
        <a href="${esc(c.source)}" target="_blank" rel="noopener">Voir la carte sur metacartes.cc ↗</a>
      </footer>`;
  }

  let contexte = [];     // liste parcourue avec ← →
  let courante = null;
  let focusAvant = null;

  function ouvrirFiche(slug) {
    const c = PAR_SLUG[slug];
    if (!c) return fermerFiche(true);
    if (!contexte.includes(c)) contexte = resultats.includes(c) ? resultats : trier(CARTES);
    courante = c;
    el.ficheContenu.innerHTML = contenuFiche(c);
    el.ficheContenu.querySelectorAll('.f-lead, .f-sections .prose').forEach(n => decorer(n, c.slug));
    el.ficheContenu.querySelectorAll('a[href^="http"]').forEach(a => { a.target = '_blank'; a.rel = 'noopener'; });
    el.ficheContenu.querySelectorAll('.prose img').forEach(img => {
      img.loading = 'eager';
      img.addEventListener('error', () => img.remove());
    });
    el.ficheContenu.scrollTop = 0;
    const i = contexte.indexOf(c);
    el.fichePos.textContent = `${i + 1} / ${contexte.length}`;
    const fav = el.fiche.querySelector('[data-action="fav"]');
    fav.setAttribute('aria-pressed', favoris.has(c.slug));
    fav.title = favoris.has(c.slug) ? 'Retirer des favoris' : 'Ajouter aux favoris';
    el.fiche.querySelector('.btn-prompt').hidden = c.type !== 'recette';   // le bouton « Prompt » n'a de sens que pour une recette
    majBoutonDeroule(c);
    el.fiche.querySelector('.btn-animer').hidden = c.type !== 'recette';
    document.title = `${c.titre} · Faire Ensemble`;
    if (!el.fiche.open) {
      focusAvant = document.activeElement;
      el.fiche.showModal();
      document.body.classList.add('no-scroll');
    }
    el.fiche.querySelector('[data-action="fermer"]').focus({ preventScroll: true });
  }

  function fermerFiche(depuisRoute) {
    if (el.fiche.open) el.fiche.close();
    document.body.classList.remove('no-scroll');
    document.title = 'Faire Ensemble · Explorateur de cartes';
    courante = null;
    contexte = [];
    if (!depuisRoute && location.hash.startsWith('#carte/')) {
      if (history.state && history.state.app) history.back();
      else history.replaceState(null, '', location.pathname + location.search);
    }
    if (focusAvant && document.contains(focusAvant)) focusAvant.focus({ preventScroll: true });
    else {
      const t = document.querySelector(`.tile-link[data-slug="${focusAvant?.dataset?.slug}"]`);
      if (t) t.focus({ preventScroll: true });
    }
  }

  function naviguer(slug) {
    const url = `#carte/${slug}`;
    if (el.fiche.open) history.replaceState(history.state, '', url);
    else history.pushState({ app: true }, '', url);
    route();
  }

  function decaler(delta) {
    if (!courante || !contexte.length) return;
    const i = (contexte.indexOf(courante) + delta + contexte.length) % contexte.length;
    naviguer(contexte[i].slug);
  }

  function route() {
    const m = location.hash.match(/^#carte\/([\w-]+)/);
    if (m) ouvrirFiche(m[1]);
    else if (el.fiche.open) fermerFiche(true);
  }

  /* ================================================================ Prompt */

  // Le sujet, le public et une durée modifiée restent remplis d'une fiche à l'autre (et d'une visite à l'autre).
  const promptSaisi = { sujet: '', publicCible: '', duree: '', ...stock.get('fe-prompt', {}) };
  const dureeCarte = c => c.infos?.duree ? dureeTxt(c.infos.duree) : '';

  /** Lien vers l'exemple de réponse (dossier exemples/, page exemple.html) quand la carte en a un. */
  function lienExemple(c) {
    const ex = window.EXEMPLES;
    if (!ex || !ex.reponses[c.slug]) return '';
    return `<p class="prompt-exemple"><a href="exemple.html?carte=${encodeURIComponent(c.slug)}" target="_blank" rel="noopener">Voir le résultat pour le prompt « ${esc(ex.sujet)} »${icone('external')}</a></p>`;
  }

  function sectionPrompt(c) {
    if (c.type !== 'recette') return '';   // pas de prompt pour les cartes « ingrédient »
    const defaut = dureeCarte(c);
    const duree = promptSaisi.duree || defaut;
    const intro = c.type === 'recette'
      ? 'Adaptez cette activité à votre situation : décrivez votre sujet et votre public, puis collez le prompt généré dans l’assistant IA de votre choix (ChatGPT, Claude, Le Chat, Gemini…). Vous obtiendrez un déroulé complet, avec des exemples concrets et des conseils pour réussir l’activité.'
      : 'Mettez ce principe en pratique : décrivez votre sujet et votre public, puis collez le prompt généré dans l’assistant IA de votre choix (ChatGPT, Claude, Le Chat, Gemini…). Vous obtiendrez le déroulé complet d’une activité adaptée, avec des exemples concrets et des conseils pour la réussir.';
    return `<section class="f-sec f-prompt" aria-labelledby="prompt-titre">
      <div class="callout callout-prompt">
        <h3 id="prompt-titre">${icone('sparkle')}Prompt</h3>
        <p class="prompt-intro">${intro}</p>
        <form class="prompt-form" novalidate>
          <div class="prompt-champ">
            <label for="prompt-sujet">Sujet de discussion ou problématique</label>
            <textarea id="prompt-sujet" name="sujet" rows="3" required aria-describedby="prompt-sujet-erreur"
              data-erreur="Indiquez le sujet de discussion ou la problématique."
              placeholder="Ex. : Comment réduire le gaspillage alimentaire à la cantine de l’école ?">${esc(promptSaisi.sujet)}</textarea>
            <p class="prompt-erreur" id="prompt-sujet-erreur"></p>
          </div>
          <div class="prompt-champ">
            <label for="prompt-public">Public qui jouera l’activité</label>
            <p class="prompt-aide" id="prompt-public-aide">Qui, combien, en présentiel ou à distance, ce qu’ils connaissent déjà du sujet…</p>
            <textarea id="prompt-public" name="publicCible" rows="2" required aria-describedby="prompt-public-aide prompt-public-erreur"
              data-erreur="Précisez le public qui jouera l’activité."
              placeholder="Ex. : 25 parents d’élèves et enseignants qui se connaissent peu, en présentiel">${esc(promptSaisi.publicCible)}</textarea>
            <p class="prompt-erreur" id="prompt-public-erreur"></p>
          </div>
          <div class="prompt-champ">
            <label for="prompt-duree">Durée</label>
            <p class="prompt-aide" id="prompt-duree-aide">${defaut
              ? `Durée prévue par la carte : ${esc(defaut)}. Adaptez-la au temps dont vous disposez.`
              : 'La carte ne précise pas de durée : indiquez le temps dont vous disposez, ou laissez vide.'}</p>
            <div class="prompt-duree">
              <input id="prompt-duree" name="duree" type="text" value="${esc(duree)}" placeholder="Ex. : 1 h 30" autocomplete="off" aria-describedby="prompt-duree-aide">
              <button class="prompt-reprendre" id="prompt-reprendre" type="button" data-action="duree-carte" ${defaut && duree.trim() !== defaut ? '' : 'hidden'}>Revenir à la durée de la carte</button>
            </div>
          </div>
          <button class="btn btn-primary" type="submit">${icone('sparkle')}Générer le prompt</button>
          ${lienExemple(c)}
        </form>
        <div class="prompt-sortie" id="prompt-sortie" hidden>
          <label for="prompt-texte">Prompt à coller dans votre assistant IA</label>
          <textarea id="prompt-texte" rows="12" readonly></textarea>
          <button class="btn btn-primary" type="button" data-action="copier-prompt">${icone('copy')}Copier le prompt</button>
        </div>
      </div>
    </section>`;
  }

  /** Convertit un contenu HTML de carte en texte Markdown léger pour le prompt : paragraphes, listes (imbriquées),
      retours à la ligne, sous-titres (### ) et gras (**). */
  function enTexte(html) {
    const tpl = document.createElement('template');
    tpl.innerHTML = html || '';
    let s = '', niveau = 0;
    const visiter = n => {
      if (n.nodeType === 3) { s += n.nodeValue.replace(/\s+/g, ' '); return; }
      if (n.nodeType !== 1) return;
      const liste = /^(UL|OL)$/.test(n.tagName), titre = /^H\d$/.test(n.tagName) && !niveau;
      // un bloc sépare les paragraphes, sauf dans une liste où il ne doit pas couper la puce
      const sep = liste || /^(P|DIV|H\d|BLOCKQUOTE)$/.test(n.tagName) ? (niveau ? ' ' : '\n\n') : '';
      if (n.tagName === 'BR') s += '\n';
      if (n.tagName === 'LI') s += `\n${'\t'.repeat(Math.max(niveau - 1, 0))}- `;   // \t : retrait des sous-listes
      s += sep;
      if (titre) s += '### ';
      const gras = /^(STRONG|B)$/.test(n.tagName) && n.textContent.trim();
      if (gras) s += /(^|[\s(«“])$/.test(s) ? '**' : ' **';   // le gras Markdown doit être isolé du mot précédent
      if (liste) niveau++;
      n.childNodes.forEach(visiter);
      if (liste) niveau--;
      if (gras) {
        const suite = n.nextSibling && n.nextSibling.nodeType === 3 ? n.nextSibling.nodeValue : '';
        s = s.replace(/\s+$/, '') + '**' + (/^[\p{L}\p{N}]/u.test(suite) ? ' ' : '');   // ...et du mot suivant
      }
      s += sep;
    };
    tpl.content.childNodes.forEach(visiter);
    return s.split('\n').map(l => l.replace(/^ +| +$/g, '').replace(/ {2,}/g, ' '))
      .filter(l => !/^\t*-$/.test(l))   // puce vide
      .join('\n').replace(/\n{3,}/g, '\n\n').replace(/\t/g, '  ').trim();
  }

  // Passages des cartes retirés des prompts : le livre « Faire ensemble » cité par la carte Mandala holistique.
  const HORS_PROMPT = [
    /^.*\blivre « Faire ensemble ».*\n?/gim,
    / et a été initialement publié par [^.]*? dans le livre « Faire ensemble[^»]*»/gi
  ];

  /** Contenu de la carte, dans l'ordre de la fiche, en sections Markdown (##) pour servir de référence au LLM.
      Les liens, les ingrédients clés et les formats liés n'y figurent pas. */
  function ficheEnTexte(c) {
    const infos = c.infos || {};
    const nettoyer = texte => HORS_PROMPT.reduce((t, re) => t.replace(re, ''), texte || '').trim();
    const section = (titre, texte) => { texte = nettoyer(texte); return texte ? `## ${titre}\n\n${texte}` : ''; };   // une section vide disparaît
    const repere = (titre, texte) => texte ? `- ${titre} : ${texte}` : '';
    const autres = liste => liste.map(a => section(a.titre, enTexte(a.html)));
    const reflexion = (c.autres || []).filter(a => /^Éléments/.test(a.titre));
    const parties = c.type === 'recette'
      ? [
          section('Résumé', c.resume),
          section('Pourquoi faire', enTexte(c.pourquoi)),
          section('Repères pratiques', [
            repere('Durée indicative', infos.duree ? dureeTxt(infos.duree) : 'variable'),
            repere('Taille du groupe', tailleTxt(c.taille).toLowerCase()),
            repere('Complexité de mise en œuvre', c.complexite && COMPLEXITES[c.complexite - 1].label.toLowerCase()),
            repere('Matériel', infos.materiel || 'aucun matériel particulier'),
            repere('Lieu', infos.lieu)
          ].filter(Boolean).join('\n')),
          section('L’essentiel', enTexte(c.essentiel)),
          section('Astuces, conseils, points de vigilance', enTexte(c.astuces)),
          section('La méthode en détail', enTexte(SYNTHESES[c.slug])),
          section('Variantes', enTexte(c.variantes)),
          ...autres(c.autres || []),
          section('Experts, communauté de pratique', enTexte(c.experts))
        ]
      : [
          section('Résumé', c.resume),
          section('Questions à se poser', enTexte(c.questions)),
          ...autres(reflexion),
          section('Stratégies', enTexte(c.strategies)),
          section('Exemples', enTexte(c.exemples)),
          ...autres((c.autres || []).filter(a => !reflexion.includes(a))),
          section('Experts et communautés de pratique', enTexte(c.experts))
        ];
    return parties.filter(Boolean).join('\n\n');
  }

  function construirePrompt(c, sujet, publicCible, duree) {
    const recette = c.type === 'recette';
    const nom = `« ${c.titre} »`;
    const cadre = duree ? 'au sujet, au public et à la durée indiqués ci-dessous' : 'au sujet et au public indiqués ci-dessous';
    const liste = items => items.filter(Boolean).map(i => `- ${i}`).join('\n');
    return [
      'Tu es un·e facilitateur·rice expérimenté·e, spécialiste de l’intelligence collective et de l’animation de réunions et d’ateliers participatifs.',
      '# Ta mission',
      (recette
        ? `Rédige le déroulé exhaustif de l’activité ${nom}, adapté ${cadre}.`
        : `L’ingrédient ${nom} est un principe clé pour concevoir des formats d’animation. Conçois une activité qui met ce principe en pratique, adaptée ${cadre}, de préférence à partir d’un format d’animation éprouvé (par exemple l’un de ceux cités dans la fiche), puis rédiges-en le déroulé exhaustif.`) +
        ' Ce déroulé doit permettre à une personne qui n’a jamais animé ce format de le préparer et de le conduire de bout en bout.',
      '# Sujet de discussion / problématique',
      sujet,
      '# Public qui jouera l’activité',
      publicCible,
      ...(duree ? ['# Durée souhaitée', duree] : []),
      `# Fiche ${recette ? 'de l’activité' : 'de l’ingrédient'} ${nom}`,
      ficheEnTexte(c),
      'Les termes en MAJUSCULES désignent d’autres formats d’animation ou des concepts de facilitation.',
      '# Structure attendue du déroulé',
      '## 1. Présentation du format',
      'Commence par une présentation claire du format, compréhensible par quelqu’un qui ne le connaît pas :\n' + liste([
        recette ? 'en quoi consiste l’activité et quel est son principe ;'
          : `en quoi consiste l’activité proposée, quel est son principe et comment elle met en œuvre l’ingrédient ${nom} ;`,
        'ce qu’elle va apporter au groupe face à cette problématique : objectifs et résultats concrets attendus ;',
        'pourquoi elle convient à ce public, et les points d’attention qui lui sont propres ;',
        'l’essentiel en bref : durée totale, nombre de participant·es, rôles (animation, gardien·ne du temps, prise de notes…), matériel et aménagement de l’espace.'
      ]),
      '## 2. Conducteur',
      'Un conducteur minuté et exhaustif, de la préparation à la clôture :\n' + liste([
        'la préparation en amont : ce qu’il faut préparer, rédiger ou installer avant l’arrivée des participant·es ;',
        'un tableau récapitulatif : minutage (0:00, 0:10…), durée, séquence, objectif, matériel ;',
        duree && 'le respect de la durée souhaitée : le minutage total doit y tenir (pour une fourchette, choisis une durée précise) ; si nécessaire, adapte le déroulé à cette durée (nombre de tours, temps par séquence…) et explique tes choix ;',
        'le détail de chaque séquence : objectif, consignes à dire mot pour mot (formulées pour ce public), ce que font les participant·es, ce que fait l’animateur·rice ;',
        'dans chaque séquence, au moins un exemple concret directement lié à la problématique : questions à poser, formulations, réponses ou productions que les participant·es pourraient apporter, exemples de synthèse ;',
        'dans chaque séquence, des conseils pour réussir : posture d’animation, points de vigilance, erreurs fréquentes, façons de relancer ou de gérer les imprévus (silences, dispersion, tensions, prises de parole monopolisées…) ;',
        'pour finir, la clôture : récolte et mise en forme des résultats, suites à donner.'
      ]),
      '# Consignes de rédaction',
      liste([
        (recette ? 'Reste fidèle au format décrit dans la fiche (étapes, esprit, astuces)'
          : 'Reste fidèle à l’esprit de l’ingrédient décrit dans la fiche et, si tu t’appuies sur un format existant, à ses étapes') +
          ' ; signale toute adaptation ou tout ajout de ta part.',
        `S’il manque une information (${duree ? '' : 'durée disponible, '}nombre exact de participant·es, présentiel ou distanciel…), fais des hypothèses réalistes et précise-les dans la présentation du format, sans me poser de questions.`,
        'Choisis des exemples propres au sujet et au public, jamais génériques, et adapte le vocabulaire et le rythme au public.',
        'Réponds en français, en Markdown (titres, listes, tableau), dans un style clair et directement utilisable le jour J.'
      ])
    ].join('\n\n');
  }

  function signalerChamp(champ, erreur) {
    champ.setAttribute('aria-invalid', erreur);
    $(`#${champ.id}-erreur`).textContent = erreur ? champ.dataset.erreur : '';
  }

  function genererPrompt(form) {
    const champs = [form.elements.sujet, form.elements.publicCible];
    const vides = champs.filter(ch => !ch.value.trim());
    champs.forEach(ch => signalerChamp(ch, vides.includes(ch)));
    if (vides.length) { vides[0].focus(); return; }
    const sortie = $('#prompt-sortie'), texte = $('#prompt-texte');
    texte.value = construirePrompt(courante, champs[0].value.trim(), champs[1].value.trim(), form.elements.duree.value.trim());
    texte.scrollTop = 0;
    sortie.hidden = false;
    sortie.querySelector('button').focus({ preventScroll: true });
    sortie.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  /** Bouton de la barre : amène à la section et place le curseur sur le premier champ à remplir. */
  function allerAuPrompt() {
    const form = el.ficheContenu.querySelector('.prompt-form');   // (le panneau Déroulé a son propre formulaire)
    if (!form) return;
    const vide = [form.elements.sujet, form.elements.publicCible].find(ch => !ch.value.trim());
    (vide || form.querySelector('[type="submit"]')).focus({ preventScroll: true });
    el.ficheContenu.querySelector('.f-prompt').scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  function noterSaisie(champ) {
    const defaut = dureeCarte(courante);
    // une durée identique à celle de la carte n'est pas retenue : chaque fiche reprend alors la sienne
    promptSaisi[champ.name] = champ.name === 'duree' && champ.value.trim() === defaut ? '' : champ.value;
    stock.set('fe-prompt', promptSaisi);
    if (champ.required && champ.value.trim()) signalerChamp(champ, false);
    if (champ.name === 'duree') $('#prompt-reprendre').hidden = !defaut || champ.value.trim() === defaut;
    $('#prompt-sortie').hidden = true;   // le prompt affiché ne correspond plus à la saisie
  }

  function reprendreDureeCarte() {
    const champ = $('#prompt-duree');
    champ.value = dureeCarte(courante);
    noterSaisie(champ);
    champ.focus();
  }

  /* =============================================================== Déroulé */

  // Le déroulé : une suite ordonnée de cartes avec une durée (en minutes) pour chacune. Il est conservé dans le
  // navigateur et recopié dans l'adresse (?deroule=slug:min,…) pour être partagé par lien.
  const ETAPES_SEANCE = ['accueillir', 'energiser', 'parole', 'explorer', 'idees', 'decider', 'evaluer'];
  const etape = c => { const i = c.objectifs.map(o => ETAPES_SEANCE.indexOf(o)).filter(i => i >= 0); return i.length ? Math.min(...i) : 3; };
  const dureeDefaut = c => c.plage ? Math.max(5, Math.round(c.plage[1] === Infinity ? c.plage[0] * 1.5 : c.plage[1])) : 30;
  const minutesTxt = m => m >= 60 ? `${Math.floor(m / 60)} h${m % 60 ? ` ${String(m % 60).padStart(2, '0')}` : ''}` : `${m} min`;

  let deroule = [];
  function lireDeroule() {
    const brut = new URLSearchParams(location.search).get('deroule');
    const source = brut != null ? brut.split(',').map(x => { const [slug, min] = x.split(':'); return { slug, min: Number(min) }; }) : stock.get('fe-deroule', []);
    deroule = source.filter(x => PAR_SLUG[x.slug] && PAR_SLUG[x.slug].type === 'recette')
      .map(x => ({ slug: x.slug, min: x.min > 0 && x.min < 1000 ? Math.round(x.min) : dureeDefaut(PAR_SLUG[x.slug]) }));
  }
  function sauverDeroule() {
    stock.set('fe-deroule', deroule);
    const p = new URLSearchParams(location.search);
    if (deroule.length) p.set('deroule', deroule.map(x => `${x.slug}:${x.min}`).join(',')); else p.delete('deroule');
    const q = p.toString().replace(/%2C/g, ',').replace(/%3A/g, ':');
    history.replaceState(history.state, '', location.pathname + (q ? `?${q}` : '') + location.hash);
    el.nbDeroule.textContent = deroule.length;
    el.nbDeroule.hidden = !deroule.length;
    document.querySelectorAll('[data-ajout]').forEach(b => majBoutonAjout(b, b.dataset.ajout));
    if (courante) majBoutonDeroule(courante);
  }
  const dansDeroule = slug => deroule.some(x => x.slug === slug);
  const dureeTotale = () => deroule.reduce((n, x) => n + x.min, 0);

  function majBoutonAjout(b, slug) {
    const dedans = dansDeroule(slug);
    b.setAttribute('aria-pressed', dedans);
    b.title = dedans ? 'Retirer du déroulé' : 'Ajouter au déroulé';
    b.setAttribute('aria-label', `${dedans ? 'Retirer du' : 'Ajouter au'} déroulé : ${PAR_SLUG[slug].titre}`);
  }
  function majBoutonDeroule(c) {
    const b = el.fiche.querySelector('.btn-deroule');
    b.hidden = c.type !== 'recette';
    b.setAttribute('aria-pressed', dansDeroule(c.slug));
    b.title = dansDeroule(c.slug) ? 'Retirer du déroulé' : 'Ajouter au déroulé';
    b.querySelector('.lbl').textContent = dansDeroule(c.slug) ? 'Dans le déroulé' : 'Déroulé';
  }

  function basculerDeroule(slug) {
    const c = PAR_SLUG[slug];
    if (!c || c.type !== 'recette') return;
    if (dansDeroule(slug)) { deroule = deroule.filter(x => x.slug !== slug); toast(`« ${c.titre} » retirée du déroulé`); }
    else { deroule.push({ slug, min: dureeDefaut(c) }); toast(`« ${c.titre} » ajoutée au déroulé (${deroule.length})`); }
    sauverDeroule();
    if (el.deroule.open) rendreDeroule();
  }

  /** Cartes à proposer avant (sens -1) ou après (sens +1) une carte : formats liés d'abord, puis l'étape
      logique d'une séance (accueillir → énergiser → parole → explorer → idées → décider → évaluer). */
  function suggerer(c, sens, exclure = new Set(), n = 3) {
    const lies = new Set();
    (c.formats || '').split(/[,;]/).map(x => x.trim()).filter(Boolean).forEach(x => { const k = trouverCarte(x, c.slug); if (k) lies.add(k.slug); });
    const e = etape(c);
    return CARTES.filter(k => k.type === 'recette' && k.slug !== c.slug && !exclure.has(k.slug))
      .map(k => {
        let score = 0;
        const d = (etape(k) - e) * sens;   // > 0 : dans le bon sens
        if (sens < 0 && d <= 0) return { k, score: 0 };   // « avant » : seulement des étapes antérieures
        if (lies.has(k.slug)) score += 5;
        else if ((k.formats || '').toUpperCase().includes(c.titre.toUpperCase())) score += 4;
        score += d === 1 ? 3 : d === 2 ? 2 : d > 2 ? 1 : d === 0 ? 0 : -2;
        if (k.taille.some(t => c.taille.includes(t))) score += 1;
        if (sens < 0 && etape(k) <= 1 && k.plage && k.plage[1] <= 15) score += 1;   // ouverture courte
        if (sens > 0 && e >= 5 && etape(k) === 6) score += 1;                      // après décider : évaluer
        return { k, score };
      })
      .filter(x => x.score > 0)
      .sort((a, b) => b.score - a.score || alpha(a.k, b.k))
      .slice(0, n).map(x => x.k);
  }

  const chipCarte = (k, ajout) => `<span class="related-item">
      <a href="#carte/${k.slug}"><img src="${k.image}" alt="">${esc(k.titre)}</a>
      ${ajout ? `<button type="button" class="chip-ajout" data-ajout="${k.slug}" aria-pressed="${dansDeroule(k.slug)}" title="Ajouter au déroulé">${icone('plus')}</button>` : ''}
    </span>`;

  /** Section « Enchaînements suggérés » de la fiche. */
  function sectionEnchainements(c) {
    if (c.type !== 'recette') return '';
    const avant = suggerer(c, -1), apres = suggerer(c, 1);
    if (!avant.length && !apres.length) return '';
    const bloc = (titre, liste) => liste.length ? `<div class="enchainement"><h4>${titre}</h4><div class="related">${liste.map(k => chipCarte(k, true)).join('')}</div></div>` : '';
    return `<section class="f-sec f-enchainements"><h3>${icone('route')}Enchaînements suggérés</h3>
      <p class="muted-note">Des formats qui s’articulent bien avec celui-ci, d’après les formats liés et la progression d’une séance (accueillir, énergiser, explorer, décider, évaluer…). Le bouton + les ajoute à votre déroulé.</p>
      ${bloc('Pour ouvrir, avant cette activité', avant)}${bloc('Pour continuer, après cette activité', apres)}
    </section>`;
  }

  function rendreDeroule() {
    const total = dureeTotale();
    el.derouleTotal.textContent = deroule.length ? `${deroule.length} activité${deroule.length > 1 ? 's' : ''} · ${minutesTxt(total)}` : 'Aucune activité pour l’instant';
    el.derouleListe.innerHTML = deroule.length ? deroule.map((x, i) => {
      const c = PAR_SLUG[x.slug];
      return `<li class="d-item">
        <span class="d-num">${i + 1}</span>
        <a class="d-carte" href="#carte/${c.slug}"><img src="${c.image}" alt=""><span><strong>${esc(c.titre)}</strong><small>${esc(c.resume)}</small></span></a>
        <label class="d-duree"><input type="number" min="1" max="999" value="${x.min}" data-dmin="${i}" aria-label="Durée en minutes de ${esc(c.titre)}"><span>min</span></label>
        <span class="d-actions">
          <button type="button" class="btn btn-icon" data-dmonter="${i}" title="Monter" aria-label="Monter ${esc(c.titre)}" ${i === 0 ? 'disabled' : ''}>${icone('up')}</button>
          <button type="button" class="btn btn-icon" data-ddescendre="${i}" title="Descendre" aria-label="Descendre ${esc(c.titre)}" ${i === deroule.length - 1 ? 'disabled' : ''}>${icone('down')}</button>
          <button type="button" class="btn btn-icon" data-dretirer="${i}" title="Retirer" aria-label="Retirer ${esc(c.titre)}">${icone('x')}</button>
        </span>
      </li>`;
    }).join('') : `<li class="d-vide">Ajoutez des activités depuis les cartes (bouton <strong>+</strong> sur une carte ou <strong>Déroulé</strong> dans une fiche) pour composer votre séance.</li>`;

    // suggestions : pour ouvrir (si la séance ne commence pas par un accueil ou un énergiseur) et pour continuer
    const dedans = new Set(deroule.map(x => x.slug));
    let sugg = '';
    if (deroule.length) {
      const premiere = PAR_SLUG[deroule[0].slug], derniere = PAR_SLUG[deroule[deroule.length - 1].slug];
      const ouvrir = etape(premiere) > 1 ? suggerer(premiere, -1, dedans, 2).filter(k => etape(k) <= 1) : [];
      const suite = suggerer(derniere, 1, dedans, 3);
      const bloc = (titre, liste) => liste.length ? `<div class="enchainement"><h4>${titre}</h4><div class="related">${liste.map(k => chipCarte(k, true)).join('')}</div></div>` : '';
      sugg = bloc('Pour ouvrir la séance', ouvrir) + bloc(`Pour continuer après « ${esc(derniere.titre)} »`, suite);
    } else {
      const ouvertures = CARTES.filter(k => k.type === 'recette' && etape(k) <= 1 && k.plage && k.plage[1] <= 15).sort(alpha).slice(0, 4);
      sugg = `<div class="enchainement"><h4>Pour commencer une séance</h4><div class="related">${ouvertures.map(k => chipCarte(k, true)).join('')}</div></div>`;
    }
    el.derouleSugg.innerHTML = sugg;
    el.derouleActions.hidden = !deroule.length;
    $('#deroule-prompt-sortie').hidden = true;
  }

  function ouvrirDeroule() {
    rendreDeroule();
    const form = $('#deroule-form');
    form.elements.sujet.value = promptSaisi.sujet;
    form.elements.publicCible.value = promptSaisi.publicCible;
    el.deroule.showModal();
  }

  /** Le déroulé en texte (copie / partage). */
  function derouleEnTexte() {
    const lignes = deroule.map((x, i) => { const c = PAR_SLUG[x.slug]; return `${i + 1}. ${c.titre} – ${minutesTxt(x.min)}\n   ${c.resume}`; });
    return [`Déroulé – ${deroule.length} activité${deroule.length > 1 ? 's' : ''} – ${minutesTxt(dureeTotale())}`, '', ...lignes, '', `Lien : ${location.origin + location.pathname}?deroule=${deroule.map(x => `${x.slug}:${x.min}`).join(',')}`].join('\n');
  }

  function imprimerDeroule() {
    const zone = document.createElement('div');
    zone.id = 'impression';
    zone.className = 'impression-deroule';
    let cumul = 0;
    const lignes = deroule.map((x, i) => {
      const c = PAR_SLUG[x.slug], debut = cumul; cumul += x.min;
      return `<tr><td>${i + 1}</td><td>${minutesTxt(debut).replace(' min', '’')}</td><td><strong>${esc(c.titre)}</strong><br><small>${esc(c.resume)}</small></td><td>${minutesTxt(x.min)}</td><td>${c.objectifs.map(id => esc(OBJ[id].court)).join(', ')}</td><td>${esc(c.infos?.materiel || '—')}</td></tr>`;
    }).join('');
    zone.innerHTML = `<header class="f-head"><div><h2>Déroulé de la séance</h2><p class="f-lead">${deroule.length} activité${deroule.length > 1 ? 's' : ''} · ${minutesTxt(dureeTotale())}</p></div></header>
      <div class="f-sections"><section class="f-sec"><h3>Vue d’ensemble</h3><table class="d-table"><thead><tr><th>N°</th><th>Début</th><th>Activité</th><th>Durée</th><th>Objectifs</th><th>Matériel</th></tr></thead><tbody>${lignes}</tbody></table></section>
      ${deroule.map((x, i) => { const c = PAR_SLUG[x.slug]; return `<section class="f-sec d-fiche"><h3>${i + 1}. ${esc(c.titre)} · ${minutesTxt(x.min)}</h3>${prose(c.essentiel && etapes(c.essentiel))}${c.astuces ? `<div class="callout callout-astuces"><h3>Astuces, conseils, points de vigilance</h3>${prose(etapes(c.astuces))}</div>` : ''}</section>`; }).join('')}</div>`;
    document.body.append(zone);
    document.body.classList.add('printing');
    const fin = () => { document.body.classList.remove('printing'); zone.remove(); window.removeEventListener('afterprint', fin); };
    window.addEventListener('afterprint', fin);
    window.print();
    setTimeout(() => { if (document.body.contains(zone) && !matchMedia('print').matches) fin(); }, 1000);
  }

  /** Prompt pour le conducteur complet de la séance. */
  function construirePromptDeroule(sujet, publicCible) {
    const liste = items => items.filter(Boolean).map(i => `- ${i}`).join('\n');
    const cartes = deroule.map(x => ({ ...x, c: PAR_SLUG[x.slug] }));
    const sequence = cartes.map((x, i) => `${i + 1}. « ${x.c.titre} » – ${minutesTxt(x.min)}`).join('\n');
    const fiches = cartes.map((x, i) => `## ${i + 1}. Fiche de l’activité « ${x.c.titre} »\n\n` + ficheEnTexte(x.c).replace(/^### /gm, '#### ').replace(/^## /gm, '### ')).join('\n\n');
    return [
      'Tu es un·e facilitateur·rice expérimenté·e, spécialiste de l’intelligence collective et de l’animation de réunions et d’ateliers participatifs.',
      '# Ta mission',
      `Rédige le conducteur complet d’une séance qui enchaîne les ${cartes.length} activités ci-dessous, dans cet ordre, adaptée au sujet et au public indiqués. Durée totale prévue : ${minutesTxt(dureeTotale())}. Ce conducteur doit permettre à une personne qui n’a jamais animé ces formats de préparer et de conduire toute la séance de bout en bout.`,
      '# Séquence prévue',
      sequence,
      '# Sujet de discussion / problématique',
      sujet,
      '# Public qui jouera la séance',
      publicCible,
      '# Fiches des activités',
      fiches,
      'Les termes en MAJUSCULES désignent d’autres formats d’animation ou des concepts de facilitation.',
      '# Structure attendue du conducteur',
      '## 1. Présentation de la séance',
      liste([
        'l’intention de la séance face à cette problématique, et ce qu’elle doit produire à la fin ;',
        'le fil rouge : pourquoi ces activités, dans cet ordre, et comment la production de chacune nourrit la suivante ;',
        'pourquoi la séance convient à ce public, et les points d’attention qui lui sont propres ;',
        'l’essentiel en bref : durée totale, nombre de participant·es, rôles (animation, gardien·ne du temps, prise de notes…), matériel et aménagement de l’espace pour toute la séance.'
      ]),
      '## 2. Vue d’ensemble',
      liste([
        'la préparation en amont : ce qu’il faut préparer, rédiger ou installer avant l’arrivée des participant·es ;',
        'un tableau récapitulatif de toute la séance : horaire (0:00, 0:15…), durée, activité ou transition, objectif, matériel ;',
        'le respect de la durée totale et des durées prévues pour chaque activité (pour une fourchette, choisis une durée précise) ; si une activité doit être adaptée à sa durée, explique tes choix.'
      ]),
      '## 3. Déroulé détaillé, activité par activité',
      'Pour chaque activité, dans l’ordre de la séquence :\n' + liste([
        'l’objectif de l’activité dans la séance, et la transition depuis la précédente : comment reprendre sa récolte, formulation pour passer de l’une à l’autre ;',
        'le détail de chaque séquence : consignes à dire mot pour mot (formulées pour ce public), ce que font les participant·es, ce que fait l’animateur·rice ;',
        'au moins un exemple concret directement lié à la problématique : questions à poser, réponses ou productions que les participant·es pourraient apporter ;',
        'des conseils pour réussir : posture d’animation, points de vigilance, erreurs fréquentes, façons de relancer ou de gérer les imprévus.'
      ]),
      '## 4. Clôture de la séance',
      liste(['récolte et mise en forme des résultats de l’ensemble de la séance, suites à donner, et un court temps de bilan avec les participant·es.']),
      '# Consignes de rédaction',
      liste([
        'Reste fidèle à chaque format décrit dans sa fiche (étapes, esprit, astuces) ; signale toute adaptation ou tout ajout de ta part.',
        'S’il manque une information (nombre exact de participant·es, présentiel ou distanciel…), fais des hypothèses réalistes et précise-les dans la présentation, sans me poser de questions.',
        'Choisis des exemples propres au sujet et au public, jamais génériques, et adapte le vocabulaire et le rythme au public.',
        'Réponds en français, en Markdown (titres, listes, tableau), dans un style clair et directement utilisable le jour J.'
      ])
    ].join('\n\n');
  }

  function genererPromptDeroule(form) {
    const champs = [form.elements.sujet, form.elements.publicCible];
    const vides = champs.filter(ch => !ch.value.trim());
    champs.forEach(ch => ch.setAttribute('aria-invalid', vides.includes(ch)));
    if (vides.length) { vides[0].focus(); return; }
    promptSaisi.sujet = champs[0].value.trim(); promptSaisi.publicCible = champs[1].value.trim();
    stock.set('fe-prompt', promptSaisi);
    $('#deroule-prompt-texte').value = construirePromptDeroule(promptSaisi.sujet, promptSaisi.publicCible);
    $('#deroule-prompt-sortie').hidden = false;
    $('#deroule-prompt-sortie').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  /* ========================================================= Mode animation */

  // Vue plein écran d'une recette (l'essentiel en gros caractères) avec un minuteur réglé sur la durée de la carte.
  // Le minuteur tourne sur l'horloge (pas sur un compteur) : il reste juste même si l'onglet est mis en veille.
  const minuteur = { total: 0, restant: 0, fin: null, tick: null, carte: null, audio: null, veille: null };
  const mmss = ms => { const s = Math.max(0, Math.round(ms / 1000)); return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`; };

  function ouvrirAnimation(c) {
    if (minuteur.carte !== c.slug) {   // nouvelle carte : minuteur réglé sur sa durée
      arreterMinuteur();
      minuteur.carte = c.slug;
      minuteur.total = minuteur.restant = dureeDefaut(c) * 60000;
    }
    el.anim.querySelector('.anim-titre').textContent = c.titre;
    el.anim.querySelector('.anim-pourquoi').innerHTML = c.pourquoi || '';
    el.anim.querySelector('.anim-essentiel').innerHTML = c.essentiel ? etapes(c.essentiel) : '';
    el.anim.querySelector('.anim-astuces').innerHTML = c.astuces ? etapes(c.astuces) : '';
    el.anim.querySelector('.anim-astuces-bloc').hidden = !c.astuces;
    el.animDuree.value = Math.round(minuteur.total / 60000);
    el.anim.classList.remove('fini');
    el.anim.querySelector('.anim-texte').style.setProperty('--zoom', minuteur.zoom);
    afficherMinuteur();
    // la fiche (boîte modale, dans la couche supérieure) est fermée le temps de l'animation, puis rouverte
    minuteur.ficheOuverte = el.fiche.open;
    if (el.fiche.open) el.fiche.close();
    el.anim.hidden = false;
    document.body.classList.add('no-scroll');
    el.anim.querySelector('[data-action="anim-marche"]').focus({ preventScroll: true });
  }
  function fermerAnimation() {
    if (document.fullscreenElement) (document.exitFullscreen || document.webkitExitFullscreen).call(document);
    el.anim.hidden = true;
    if (minuteur.ficheOuverte && courante) { el.fiche.showModal(); el.fiche.querySelector('.btn-animer').focus({ preventScroll: true }); }
    else document.body.classList.remove('no-scroll');
  }

  function afficherMinuteur() {
    const enCours = !!minuteur.fin;
    el.animTemps.textContent = mmss(minuteur.restant);
    el.animTemps.classList.toggle('long', el.animTemps.textContent.length > 5);   // ≥ 100 min : chiffres plus petits
    el.anim.querySelector('.anim-barre i').style.width = `${minuteur.total ? 100 - 100 * minuteur.restant / minuteur.total : 0}%`;
    const b = el.anim.querySelector('[data-action="anim-marche"]');
    b.querySelector('.lbl').textContent = enCours ? 'Pause' : minuteur.restant < minuteur.total && minuteur.restant > 0 ? 'Reprendre' : 'Démarrer';
    b.querySelector('use').setAttribute('href', enCours ? '#i-pause' : '#i-play');
    el.anim.classList.toggle('en-cours', enCours);
    // rappel discret dans la barre de la fiche
    const lbl = el.fiche.querySelector('.btn-animer .lbl');
    lbl.textContent = enCours ? mmss(minuteur.restant) : 'Animer';
  }
  function demarrerMinuteur() {
    if (minuteur.restant <= 0) minuteur.restant = minuteur.total;
    minuteur.fin = Date.now() + minuteur.restant;
    el.anim.classList.remove('fini');
    clearInterval(minuteur.tick);
    minuteur.tick = setInterval(() => {
      minuteur.restant = minuteur.fin - Date.now();
      if (minuteur.restant <= 0) { minuteur.restant = 0; terminerMinuteur(); }
      afficherMinuteur();
    }, 250);
    garderEcranAllume(true);
    afficherMinuteur();
  }
  function mettreEnPause() {
    if (!minuteur.fin) return;
    minuteur.restant = Math.max(0, minuteur.fin - Date.now());
    minuteur.fin = null;
    clearInterval(minuteur.tick);
    garderEcranAllume(false);
    afficherMinuteur();
  }
  function arreterMinuteur() {
    mettreEnPause();
    minuteur.restant = minuteur.total;
    el.anim.classList.remove('fini');
    afficherMinuteur();
  }
  function reglerMinuteur(minutes) {
    const m = Math.min(999, Math.max(1, Math.round(minutes) || 1));
    const enCours = !!minuteur.fin;
    mettreEnPause();
    minuteur.total = minuteur.restant = m * 60000;
    el.animDuree.value = m;
    if (enCours) demarrerMinuteur(); else afficherMinuteur();
  }
  function ajusterMinuteur(deltaMin) {
    // ajoute ou retire du temps sans repartir de zéro
    const enCours = !!minuteur.fin;
    mettreEnPause();
    minuteur.restant = Math.max(0, minuteur.restant + deltaMin * 60000);
    minuteur.total = Math.max(minuteur.total + deltaMin * 60000, 60000, minuteur.restant);
    el.animDuree.value = Math.round(minuteur.total / 60000);
    if (enCours && minuteur.restant > 0) demarrerMinuteur(); else afficherMinuteur();
  }
  function terminerMinuteur() {
    clearInterval(minuteur.tick);
    minuteur.fin = null;
    garderEcranAllume(false);
    el.anim.classList.add('fini');
    try { navigator.vibrate && navigator.vibrate([300, 150, 300, 150, 600]); } catch { /* ignoré */ }
    sonner();
  }
  /** Trois bips (Web Audio : pas de fichier son à charger). L'audio n'est créé qu'après un geste de l'utilisateur. */
  function sonner() {
    try {
      const ctx = minuteur.audio || (minuteur.audio = new (window.AudioContext || window.webkitAudioContext)());
      [0, 0.35, 0.7].forEach(t => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.type = 'sine'; o.frequency.value = 880;
        g.gain.setValueAtTime(0.0001, ctx.currentTime + t);
        g.gain.exponentialRampToValueAtTime(0.4, ctx.currentTime + t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + t + 0.3);
        o.connect(g).connect(ctx.destination);
        o.start(ctx.currentTime + t); o.stop(ctx.currentTime + t + 0.32);
      });
    } catch { /* pas d'audio */ }
  }
  /** Empêche l'écran de s'éteindre pendant que le minuteur tourne (téléphone posé sur la table, projection). */
  async function garderEcranAllume(oui) {
    try {
      if (oui && !minuteur.veille && navigator.wakeLock) minuteur.veille = await navigator.wakeLock.request('screen');
      if (!oui && minuteur.veille) { await minuteur.veille.release(); minuteur.veille = null; }
    } catch { minuteur.veille = null; }
  }
  document.addEventListener('visibilitychange', () => { if (!document.hidden && minuteur.fin) garderEcranAllume(true); });

  /** Taille du texte du panneau (facteur 0,6 à 2, mémorisé). */
  function zoomerTexte(delta) {
    const z = Math.min(2, Math.max(0.6, Math.round((minuteur.zoom + delta) * 10) / 10));
    minuteur.zoom = z;
    el.anim.querySelector('.anim-texte').style.setProperty('--zoom', z);
    stock.set('fe-anim-zoom', z);
    toast(`Texte : ${Math.round(z * 100)} %`);
  }
  minuteur.zoom = Number(stock.get('fe-anim-zoom', 1)) || 1;

  function basculerPleinEcran() {
    if (document.fullscreenElement) (document.exitFullscreen || document.webkitExitFullscreen).call(document);
    else if (el.anim.requestFullscreen) el.anim.requestFullscreen({ navigationUI: 'hide' }).catch(() => toast('Plein écran refusé par le navigateur'));
    else if (el.anim.webkitRequestFullscreen) el.anim.webkitRequestFullscreen();
    else toast('Plein écran non disponible sur ce navigateur (utilisez le mode plein écran du navigateur)');
  }

  /* ============================================================ Utilitaires */

  let toastTimer;
  function toast(msg) {
    el.toast.textContent = msg;
    el.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.toast.classList.remove('show'), 2200);
  }

  function basculerFavori(slug) {
    if (favoris.has(slug)) favoris.delete(slug); else favoris.add(slug);
    stock.set('fe-favoris', [...favoris]);
    const titre = PAR_SLUG[slug].titre;
    toast(favoris.has(slug) ? `« ${titre} » ajoutée aux favoris` : `« ${titre} » retirée des favoris`);
    rendre();
    if (courante && courante.slug === slug) {
      const b = el.fiche.querySelector('[data-action="fav"]');
      b.setAttribute('aria-pressed', favoris.has(slug));
      b.title = favoris.has(slug) ? 'Retirer des favoris' : 'Ajouter aux favoris';
    }
  }

  async function copier(texte, message) {
    try {
      await navigator.clipboard.writeText(texte);
    } catch {
      const t = document.createElement('textarea');
      t.value = texte; el.fiche.append(t); t.select();
      try { document.execCommand('copy'); } catch { /* ignoré */ }
      t.remove();
    }
    toast(message);
  }

  function imprimer() {
    const zone = document.createElement('div');
    zone.id = 'impression';
    zone.innerHTML = el.ficheContenu.innerHTML;
    zone.querySelectorAll('details.detail').forEach(d => { d.open = true; });   // la méthode en détail s'imprime dépliée
    document.body.append(zone);
    document.body.classList.add('printing');
    const fin = () => { document.body.classList.remove('printing'); zone.remove(); window.removeEventListener('afterprint', fin); };
    window.addEventListener('afterprint', fin);
    window.print();
    setTimeout(() => { if (document.body.contains(zone) && !matchMedia('print').matches) fin(); }, 1000);
  }

  function reinitialiser() {
    etat.q = ''; el.recherche.value = '';
    ['objectifs', 'durees', 'tailles', 'complexites', 'types'].forEach(g => etat[g].clear());
    TYPES_DEFAUT.forEach(t => etat.types.add(t));
    etat.sansMateriel = etat.favoris = false;
    el.sansMateriel.checked = el.favoris.checked = false;
    rendre();
  }

  function ouvrirFiltres(ouvrir) {
    el.filtres.classList.toggle('open', ouvrir);
    el.fondFiltres.hidden = !ouvrir;
    document.body.classList.toggle('no-scroll', ouvrir);
  }

  const themeSombre = () => {
    const t = document.documentElement.dataset.theme;
    return t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  };

  /* ============================================================ Événements */

  let appui = null;   // élément sur lequel le dernier clic a commencé
  document.addEventListener('pointerdown', e => { appui = e.target; });

  document.addEventListener('click', e => {
    const t = e.target;

    const lienCarte = t.closest('a[href^="#carte/"]');
    if (lienCarte && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
      e.preventDefault();
      if (!el.fiche.open && lienCarte.closest('.tile')) contexte = resultats;
      naviguer(lienCarte.getAttribute('href').slice(7));
      return;
    }

    const opt = t.closest('[data-groupe]');
    if (opt && !opt.disabled) {
      const g = opt.dataset.groupe;
      const id = g === 'complexites' ? Number(opt.dataset.id) : opt.dataset.id;
      etat[g].has(id) ? etat[g].delete(id) : etat[g].add(id);
      rendre();
      return;
    }

    const fav = t.closest('[data-fav]');
    if (fav) { basculerFavori(fav.dataset.fav); return; }

    const retirer = t.closest('[data-retirer]');
    if (retirer) {
      const g = retirer.dataset.retirer, id = retirer.dataset.id;
      if (g === 'q') { etat.q = ''; el.recherche.value = ''; }
      else if (g === 'sansMateriel' || g === 'favoris') { etat[g] = false; el[g].checked = false; }
      else etat[g].delete(g === 'complexites' ? Number(id) : id);
      rendre();
      return;
    }

    const ajout = t.closest('[data-ajout]');
    if (ajout) { basculerDeroule(ajout.dataset.ajout); return; }
    const dmonter = t.closest('[data-dmonter]'), ddescendre = t.closest('[data-ddescendre]'), dretirer = t.closest('[data-dretirer]');
    if (dmonter || ddescendre || dretirer) {
      const i = Number((dmonter || ddescendre || dretirer).dataset[dmonter ? 'dmonter' : ddescendre ? 'ddescendre' : 'dretirer']);
      if (dretirer) deroule.splice(i, 1);
      else { const j = dmonter ? i - 1 : i + 1; [deroule[i], deroule[j]] = [deroule[j], deroule[i]]; }
      sauverDeroule(); rendreDeroule(); return;
    }

    const action = t.closest('[data-action]')?.dataset.action;
    switch (action) {
      case 'animer': if (courante) ouvrirAnimation(courante); return;
      case 'fermer-anim': fermerAnimation(); return;
      case 'anim-marche': if (minuteur.fin) mettreEnPause(); else { if (minuteur.audio && minuteur.audio.state === 'suspended') minuteur.audio.resume(); demarrerMinuteur(); } return;
      case 'anim-reset': arreterMinuteur(); return;
      case 'anim-plus': ajusterMinuteur(1); return;
      case 'anim-moins': ajusterMinuteur(-1); return;
      case 'anim-plein-ecran': basculerPleinEcran(); return;
      case 'anim-plus-grand': zoomerTexte(0.1); return;
      case 'anim-moins-grand': zoomerTexte(-0.1); return;
      case 'anim-essentiel': el.anim.classList.toggle('sans-astuces'); return;
      case 'deroule': if (courante) basculerDeroule(courante.slug); return;
      case 'ouvrir-deroule': ouvrirDeroule(); return;
      case 'fermer-deroule': el.deroule.close(); return;
      case 'deroule-vider': if (deroule.length && confirm('Vider le déroulé ?')) { deroule = []; sauverDeroule(); rendreDeroule(); } return;
      case 'deroule-copier': copier(derouleEnTexte(), 'Déroulé copié'); return;
      case 'deroule-lien': copier(`${location.origin + location.pathname}?deroule=${deroule.map(x => `${x.slug}:${x.min}`).join(',')}`, 'Lien du déroulé copié'); return;
      case 'deroule-imprimer': imprimerDeroule(); return;
      case 'copier-prompt-deroule': copier($('#deroule-prompt-texte').value, 'Prompt copié : collez-le dans votre assistant IA'); return;
      case 'reinit': reinitialiser(); return;
      case 'fermer': fermerFiche(); return;
      case 'prec': decaler(-1); return;
      case 'suiv': decaler(1); return;
      case 'fav': if (courante) basculerFavori(courante.slug); return;
      case 'lien': copier(location.href, 'Lien de la carte copié'); return;
      case 'recharger': location.reload(); return;
      case 'fermer-maj': $('#maj').hidden = true; return;
      case 'installer': installer(); return;
      case 'copier-selection': copier(location.origin + location.pathname + location.search, 'Lien de la sélection copié'); return;
      case 'imprimer': imprimer(); return;
      case 'fermer-apropos': el.apropos.close(); return;
      case 'fermer-qr': el.qr.close(); return;
      case 'prompt': allerAuPrompt(); return;
      case 'duree-carte': reprendreDureeCarte(); return;
      case 'copier-prompt': copier($('#prompt-texte').value, 'Prompt copié : collez-le dans votre assistant IA'); return;
    }

    // clic sur le fond d'une boîte de dialogue (commencé sur le fond : une sélection
    // de texte relâchée hors de la fiche ne doit pas la fermer)
    if (t === el.fiche && appui === el.fiche) fermerFiche();
    if (t === el.apropos && appui === el.apropos) el.apropos.close();
    if (t === el.qr && appui === el.qr) el.qr.close();
    if (t === el.deroule && appui === el.deroule) el.deroule.close();
  });

  el.animDuree.addEventListener('change', () => reglerMinuteur(Number(el.animDuree.value)));
  document.addEventListener('keydown', e => {
    if (el.anim.hidden) return;
    const saisie = /^(INPUT|TEXTAREA)$/.test(document.activeElement?.tagName);
    if (e.key === 'Escape') { e.preventDefault(); if (!document.fullscreenElement) fermerAnimation(); }   // en plein écran, Échap le quitte d'abord
    if (e.key === ' ' && !saisie) { e.preventDefault(); el.anim.querySelector('[data-action="anim-marche"]').click(); }
    if ((e.key === 'f' || e.key === 'F') && !saisie) { e.preventDefault(); basculerPleinEcran(); }
    if ((e.key === '+' || e.key === '=') && !saisie) { e.preventDefault(); zoomerTexte(0.1); }
    if (e.key === '-' && !saisie) { e.preventDefault(); zoomerTexte(-0.1); }
  }, true);

  el.deroule.addEventListener('change', e => {
    const champ = e.target.closest('[data-dmin]');
    if (!champ) return;
    const v = Math.round(Number(champ.value));
    deroule[Number(champ.dataset.dmin)].min = v > 0 ? Math.min(v, 999) : dureeDefaut(PAR_SLUG[deroule[Number(champ.dataset.dmin)].slug]);
    sauverDeroule(); rendreDeroule();
  });
  el.deroule.addEventListener('submit', e => { e.preventDefault(); genererPromptDeroule(e.target); });
  // un clic sur une carte du déroulé ouvre sa fiche par-dessus
  el.deroule.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#carte/"]');
    if (a) { e.preventDefault(); el.deroule.close(); naviguer(a.getAttribute('href').slice(7)); }
  });

  /* ------------------------------------------------------------- QR code */

  /** Adresse de l'application (sans filtres ni carte ouverte), telle qu'elle est hébergée. */
  const urlApp = () => location.origin + location.pathname;

  /** QR code de l'adresse de l'application, en SVG (généré à l'ouverture : valable quel que soit l'hébergement). */
  function afficherQr() {
    const url = urlApp();
    const qr = qrcode(0, 'M');   // 0 : plus petite version capable de contenir l'adresse
    qr.addData(url);
    qr.make();
    const n = qr.getModuleCount(), marge = 2;   // zone de silence de 2 modules (fond blanc étendu par le style)
    let d = '';
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (qr.isDark(r, c)) d += `M${c + marge} ${r + marge}h1v1h-1z`;
    const taille = n + marge * 2;
    el.qrCode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${taille} ${taille}" shape-rendering="crispEdges" aria-hidden="true"><rect width="${taille}" height="${taille}" fill="#fff"/><path d="${d}" fill="#000"/></svg>`;
    el.qrUrl.textContent = url;
    el.qr.showModal();
  }

  el.fiche.addEventListener('cancel', e => { e.preventDefault(); fermerFiche(); });

  el.ficheContenu.addEventListener('submit', e => {
    e.preventDefault();
    genererPrompt(e.target);
  });
  el.ficheContenu.addEventListener('input', e => {
    if (e.target.closest('.prompt-form')) noterSaisie(e.target);
  });

  let tempo;
  el.recherche.addEventListener('input', () => {
    clearTimeout(tempo);
    tempo = setTimeout(() => { etat.q = el.recherche.value.trim(); rendre(); }, 120);
  });
  el.recherche.addEventListener('keydown', e => {
    if (e.key === 'Enter' && resultats.length === 1) naviguer(resultats[0].slug);
  });
  el.tri.addEventListener('change', () => { etat.tri = el.tri.value; rendre(); });
  el.sansMateriel.addEventListener('change', () => { etat.sansMateriel = el.sansMateriel.checked; rendre(); });
  el.favoris.addEventListener('change', () => { etat.favoris = el.favoris.checked; rendre(); });

  $('#btn-hasard').addEventListener('click', () => {
    const pool = resultats.length ? resultats : CARTES;
    const c = pool[Math.floor(Math.random() * pool.length)];
    contexte = pool;
    naviguer(c.slug);
  });
  $('#btn-theme').addEventListener('click', () => {
    const t = themeSombre() ? 'light' : 'dark';
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem('fe-theme', t); } catch { /* ignoré */ }
  });
  $('#btn-apropos').addEventListener('click', () => el.apropos.showModal());
  $('#btn-qr').addEventListener('click', afficherQr);
  $('#btn-deroule').addEventListener('click', ouvrirDeroule);
  $('#btn-filtres').addEventListener('click', () => ouvrirFiltres(true));
  $('#btn-fermer-filtres').addEventListener('click', () => ouvrirFiltres(false));
  $('#btn-voir-resultats').addEventListener('click', () => ouvrirFiltres(false));
  el.fondFiltres.addEventListener('click', () => ouvrirFiltres(false));
  $('.brand').addEventListener('click', e => { e.preventDefault(); fermerFiche(); reinitialiser(); window.scrollTo({ top: 0, behavior: 'smooth' }); });

  document.addEventListener('keydown', e => {
    const saisie = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName);
    if (el.fiche.open) {
      if (e.key === 'ArrowLeft' && !saisie) { e.preventDefault(); decaler(-1); }
      if (e.key === 'ArrowRight' && !saisie) { e.preventDefault(); decaler(1); }
      return;
    }
    if (!el.anim.hidden) return;
    if (e.key === '/' && !saisie && !el.apropos.open && !el.qr.open && !el.deroule.open) { e.preventDefault(); el.recherche.focus(); el.recherche.select(); }
    if (e.key === 'Escape' && el.filtres.classList.contains('open')) ouvrirFiltres(false);
  });

  window.addEventListener('hashchange', route);

  /* =============================================== Hors ligne / installation */

  // Service worker (sw.js, généré par outils/generer-sw.js) : l'application reste consultable sans réseau.
  // Quand une nouvelle version est installée en arrière-plan, une bannière propose de recharger.
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(reg => {
      const surveiller = sw => sw && sw.addEventListener('statechange', () => {
        if (sw.state === 'installed' && navigator.serviceWorker.controller) $('#maj').hidden = false;
      });
      surveiller(reg.installing);
      reg.addEventListener('updatefound', () => surveiller(reg.installing));
    }).catch(() => { /* hors https ou navigateur sans service worker : l'application fonctionne, mais en ligne */ });
  }

  // Bouton « Installer l'application » (fenêtre À propos) quand le navigateur le permet
  let invitationInstall = null;
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); invitationInstall = e; $('#apropos-installer').hidden = false; });
  window.addEventListener('appinstalled', () => { invitationInstall = null; $('#apropos-installer').hidden = true; toast('Application installée'); });
  async function installer() {
    if (!invitationInstall) return;
    invitationInstall.prompt();
    await invitationInstall.userChoice.catch(() => {});
    invitationInstall = null;
    $('#apropos-installer').hidden = true;
  }

  /* ============================================================ Démarrage */

  urlVersEtat();
  lireDeroule();
  sauverDeroule();
  rendre();
  route();
})();
