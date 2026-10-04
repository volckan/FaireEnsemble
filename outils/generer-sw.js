// Génère sw.js : liste de précache (coquille de l'app + images) et stratégie de cache.
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const repo = require('path').resolve(__dirname, '..');
const coquille = ['./', 'index.html', 'exemple.html', 'manifest.webmanifest', 'css/styles.css',
  'js/app.js', 'js/data.js', 'js/classement.js', 'js/syntheses.js', 'js/exemples.js', 'js/exemple.js', 'js/vendor/qrcode.js', 'js/vendor/marked.js'];
const images = [...fs.readdirSync(repo + '/img/cartes').map(f => 'img/cartes/' + f), ...fs.readdirSync(repo + '/img/contenus').map(f => 'img/contenus/' + f), ...fs.readdirSync(repo + '/img/icones').map(f => 'img/icones/' + f)];
const fichiers = [...coquille, ...images];
// version = empreinte du contenu : tout changement de fichier installe un nouveau service worker
const h = crypto.createHash('sha1');
for (const f of fichiers) if (f !== './') h.update(fs.readFileSync(path.join(repo, f)));
const version = h.digest('hex').slice(0, 10);
const sw = `/* Service worker de l'application Faire Ensemble : consultation hors ligne et installation.
   Fichier GÉNÉRÉ par outils/generer-sw.js (liste de précache + version) : régénérez-le après toute
   modification de l'application ou des images, sinon les visiteurs gardent l'ancienne version en cache. */

const VERSION = '${version}';
const CACHE = 'faire-ensemble-' + VERSION;
const CACHE_DOCS = 'faire-ensemble-docs';   // fichiers chargés à la demande (exemples), conservés entre versions

const PRECACHE = ${JSON.stringify(fichiers, null, 2).replace(/\n/g, '\n')};

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
`;
fs.writeFileSync(repo + '/sw.js', sw);
console.log('sw.js généré – version', version, '–', fichiers.length, 'fichiers précachés');
