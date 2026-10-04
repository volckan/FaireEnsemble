// Test de fumée : pilote l'application dans Chromium et vérifie les fonctions principales.
// Prérequis : Playwright (npm i -g playwright && npx playwright install chromium). Usage : node outils/test-smoke.js
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const repo = path.resolve(__dirname, '..');
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.jpg': 'image/jpeg', '.png': 'image/png', '.md': 'text/markdown; charset=utf-8', '.webmanifest': 'application/manifest+json' };
const srv = http.createServer((req, res) => {
  let u = decodeURIComponent(req.url.split('?')[0]); if (u === '/') u = '/index.html';
  const p = path.join(repo, u); if (!fs.existsSync(p)) { res.statusCode = 404; return res.end(); }
  res.setHeader('content-type', types[path.extname(p)] || 'application/octet-stream'); res.end(fs.readFileSync(p));
}).listen(0);
let echecs = 0;
const verif = (nom, ok, detail = '') => { console.log(`${ok ? '✓' : '✗'} ${nom}${detail ? ' – ' + detail : ''}`); if (!ok) echecs++; };
(async () => {
  const port = srv.address().port, base = `http://localhost:${port}/`;
  const b = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH });
  const ctx = await b.newContext({ serviceWorkers: 'block' }); const page = await ctx.newPage();
  const erreurs = []; page.on('pageerror', e => erreurs.push(e.message)); page.on('dialog', d => d.accept());

  await page.goto(base); await page.waitForSelector('.tile');
  verif('accueil : 52 recettes par défaut', await page.locator('.tile').count() === 52, await page.locator('#compteur').textContent());
  await page.goto(base + '?obj=decider&type=tous'); await page.waitForSelector('.tile');
  verif('filtres lus dans l’adresse', (await page.locator('.pill').allTextContents()).join().includes('Décider'), (await page.locator('#compteur').textContent()));
  await page.click('#f-duree [data-id="express"]'); await page.waitForTimeout(100);
  verif('filtres écrits dans l’adresse', (await page.evaluate(() => location.search)).includes('duree=express'));

  await page.goto(base + '#carte/world-cafe'); await page.waitForSelector('#fiche[open]');
  verif('fiche : La méthode en détail repliée, synthèse puis sources', await page.evaluate(() => { const d = document.querySelector('details.detail'); return d && !d.open && [...d.children].map(e => e.className.split(' ')[0]).join('>') === '>prose>sources>links'; }));
  verif('fiche : enchaînements suggérés', await page.locator('.f-enchainements .related-item').count() > 0);
  await page.fill('#prompt-sujet', 'test'); await page.fill('#prompt-public', 'test'); await page.locator('#fiche-contenu .prompt-form [type="submit"]').click({ force: true }); await page.waitForTimeout(100);
  const prompt = await page.locator('#prompt-texte').inputValue();
  verif('prompt généré avec la synthèse, sans liens ni formats liés', prompt.includes('## La méthode en détail') && !prompt.includes('Formats liés') && !/https?:\/\/[^\s]*(github|framagit)/.test(prompt), prompt.split(/\s+/).length + ' mots');
  verif('lien vers l’exemple de réponse', (await page.locator('.prompt-exemple a').getAttribute('href') || '').startsWith('exemple.html?carte=world-cafe'));

  await page.click('.btn-deroule'); await page.waitForTimeout(100);
  verif('déroulé : ajout depuis la fiche', await page.evaluate(() => document.querySelector('#nb-deroule').textContent === '1' && location.search.includes('deroule=world-cafe')));
  await page.click('.btn-animer'); await page.waitForSelector('#animation[open]');
  verif('mode animation : minuteur réglé sur la carte', /^\d{2,3}:\d\d$/.test(await page.locator('#anim-temps').textContent()), await page.locator('#anim-temps').textContent());
  await page.keyboard.press('Escape'); await page.keyboard.press('Escape'); await page.waitForTimeout(200);
  await page.click('#btn-deroule'); await page.waitForSelector('#deroule[open]');
  verif('déroulé : panneau avec suggestions', await page.locator('.d-item').count() === 1 && await page.locator('#deroule-suggestions .related-item').count() > 0);
  await page.click('[data-action="deroule-vider"]'); await page.keyboard.press('Escape'); await page.waitForTimeout(200);

  await page.goto(base + '#carte/intention'); await page.waitForSelector('#fiche[open]');
  verif('ingrédient : ni prompt, ni déroulé, ni animation', await page.evaluate(() => !document.querySelector('#fiche-contenu .f-prompt') && document.querySelector('.btn-deroule').hidden && document.querySelector('.btn-animer').hidden));
  await page.keyboard.press('Escape'); await page.waitForTimeout(200);
  await page.click('#btn-qr'); await page.waitForSelector('#qr[open]');
  verif('QR code généré', await page.locator('#qr-code svg path').count() === 1);
  await page.keyboard.press('Escape');

  await page.goto(base + 'exemple.html?carte=world-cafe'); await page.waitForSelector('#pied:not([hidden])');
  verif('page exemple : réponse mise en forme', await page.locator('#reponse table').count() > 0);
  await page.goto(base + 'exemple.html?carte=world-cafe&vue=prompt'); await page.waitForSelector('#pied:not([hidden])');
  verif('page exemple : vue prompt lisible (UTF-8)', /facilitateur·rice expérimenté·e/.test(await page.locator('#reponse pre').textContent()));

  verif('aucune erreur JavaScript', erreurs.length === 0, erreurs.join(' | '));
  await b.close(); srv.close();
  console.log(echecs ? `\n${echecs} vérification(s) en échec` : '\nTout est bon');
  process.exit(echecs ? 1 : 0);
})();
