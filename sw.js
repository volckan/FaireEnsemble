/* Service worker de l'application Faire Ensemble : consultation hors ligne et installation.
   Fichier GÉNÉRÉ par outils/generer-sw.js (liste de précache + version) : régénérez-le après toute
   modification de l'application ou des images, sinon les visiteurs gardent l'ancienne version en cache. */

const VERSION = '67bc462666';
const CACHE = 'faire-ensemble-' + VERSION;
const CACHE_DOCS = 'faire-ensemble-docs';   // fichiers chargés à la demande (exemples), conservés entre versions

const PRECACHE = [
  "./",
  "index.html",
  "exemple.html",
  "manifest.webmanifest",
  "css/styles.css",
  "js/app.js",
  "js/data.js",
  "js/classement.js",
  "js/syntheses.js",
  "js/exemples.js",
  "js/exemple.js",
  "js/vendor/qrcode.js",
  "js/vendor/marked.js",
  "img/cartes/5-pourquoi.jpg",
  "img/cartes/accelerateur-de-projet.jpg",
  "img/cartes/analyse-swot.jpg",
  "img/cartes/arpentage.jpg",
  "img/cartes/baton-de-parole.jpg",
  "img/cartes/baton-dhelium.jpg",
  "img/cartes/bodystorming.jpg",
  "img/cartes/boite-temporelle-timebox.png",
  "img/cartes/carte-mentale.jpg",
  "img/cartes/cercle-de-parole.jpg",
  "img/cartes/cercle-samoan.png",
  "img/cartes/chifoumi-collectif-pierre-feuille-ciseaux.jpg",
  "img/cartes/debat-mouvant.jpg",
  "img/cartes/decision-par-consentement.jpg",
  "img/cartes/demande-de-silence.jpg",
  "img/cartes/diagramme-avec-les-pieds.jpg",
  "img/cartes/discussion-ascenceur.jpg",
  "img/cartes/discussion-kanak.jpg",
  "img/cartes/documentation-croisee.jpg",
  "img/cartes/elevator-pitch.jpg",
  "img/cartes/energiseur-un-a-neuf.jpg",
  "img/cartes/enquete-appreciative.jpg",
  "img/cartes/intention.png",
  "img/cartes/langage-silencieux.jpg",
  "img/cartes/les-3c-conserver-cesser-creer.jpg",
  "img/cartes/les-animaux-de-la-ferme.jpg",
  "img/cartes/mandala-holistique.jpg",
  "img/cartes/marche-en-aveugle.jpg",
  "img/cartes/matrice-impact-effort.jpg",
  "img/cartes/matrice-plus-delta.jpg",
  "img/cartes/meteo-interieure.jpg",
  "img/cartes/methode-des-personas.jpg",
  "img/cartes/methode-des-post-it.jpg",
  "img/cartes/methode-walt-disney.jpg",
  "img/cartes/mon-journal.jpg",
  "img/cartes/panorama-des-reussites.jpg",
  "img/cartes/parole-au-centre.jpg",
  "img/cartes/photolangage.jpg",
  "img/cartes/pomodoro-synchrone.jpg",
  "img/cartes/presentation-croisee.jpg",
  "img/cartes/presentations-eclairs.jpg",
  "img/cartes/recolte.png",
  "img/cartes/respiration-collective.jpg",
  "img/cartes/retrospective-a-4-questions.jpg",
  "img/cartes/reunion-debout.jpg",
  "img/cartes/reunion-en-marchant.jpg",
  "img/cartes/roles.png",
  "img/cartes/sens.png",
  "img/cartes/six-chapeaux-de-bono.jpg",
  "img/cartes/souvenir-du-futur.jpg",
  "img/cartes/sprint-ecriture.jpg",
  "img/cartes/tables-de-decouverte.jpg",
  "img/cartes/tous-dans-le-meme-bateau.jpg",
  "img/cartes/tri-par-affinites.jpg",
  "img/cartes/vote-a-cinq-doigts.jpg",
  "img/cartes/vote-a-points.jpg",
  "img/cartes/world-cafe.jpg",
  "img/contenus/Boussole-de-la-gouvernance-partagee-767x1024.jpg",
  "img/contenus/canevas_mandala_holistique.png",
  "img/contenus/gamestorming2.jpg",
  "img/contenus/gestes_langages_silencieux_imprimable-732x1024.png",
  "img/contenus/guide-mandala-metacartes.jpeg",
  "img/contenus/recette_6_chapeaux_bono.jpg",
  "img/icones/apple-touch-icon.png",
  "img/icones/icone-192.png",
  "img/icones/icone-512.png",
  "img/icones/icone-maskable-512.png"
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(cles => Promise.all(cles.filter(k => k !== CACHE && k !== CACHE_DOCS).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('message', e => { if (e.data === 'activer') self.skipWaiting(); });

const memeOrigine = url => url.origin === self.location.origin;

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Navigation (index.html, exemple.html, avec ou sans ?… et #…) : la coquille en cache, sinon le réseau
  if (req.mode === 'navigate') {
    const page = url.pathname.endsWith('exemple.html') ? 'exemple.html' : './';
    e.respondWith(caches.match(page, { ignoreSearch: true }).then(r => r || fetch(req)));
    return;
  }

  // Fichiers de l'application et images : cache d'abord (ils sont tous précachés), sinon le réseau
  if (memeOrigine(url)) {
    e.respondWith(caches.match(req, { ignoreSearch: true }).then(r => r || fetch(req).then(reponse => {
      // fichiers chargés à la demande (exemples Markdown…) : mis en cache pour la prochaine fois
      if (reponse.ok) caches.open(CACHE_DOCS).then(c => c.put(req, reponse.clone()));
      return reponse;
    })));
    return;
  }

  // Ressources externes (polices Google) : réseau, avec copie en cache pour le hors ligne
  e.respondWith(fetch(req).then(reponse => {
    caches.open(CACHE_DOCS).then(c => c.put(req, reponse.clone()));
    return reponse;
  }).catch(() => caches.match(req)));
});
