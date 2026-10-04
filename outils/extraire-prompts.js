// Réextrait les prompts de toutes les cartes recette (ordre de l'accueil) dans exemples/prompts/, avec le sujet
// et le public du cas d'usage, en pilotant l'application dans Chromium. À relancer quand le générateur de
// prompt (app.js) ou le contenu des cartes change, puis régénérer les réponses et lancer generer-exemples.js.
// Prérequis : Playwright (npm i -g playwright && npx playwright install chromium).
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const repo = path.resolve(__dirname, '..');
const sujet = 'Comment améliorer les interactions dans une formation d’adultes ?', publicCible = 'Formateurs d’adultes';
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.jpg': 'image/jpeg', '.png': 'image/png' };
const srv = http.createServer((req, res) => {
  let u = decodeURIComponent(req.url.split('?')[0]); if (u === '/') u = '/index.html';
  const p = path.join(repo, u); if (!fs.existsSync(p)) { res.statusCode = 404; return res.end(); }
  res.setHeader('content-type', types[path.extname(p)] || 'application/octet-stream'); res.end(fs.readFileSync(p));
}).listen(0);
(async () => {
  const port = srv.address().port;
  const b = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH });
  const page = await b.newPage();
  await page.goto(`http://localhost:${port}/`); await page.waitForSelector('.tile');
  const recettes = await page.evaluate(() => [...document.querySelectorAll('.tile')].filter(t => t.querySelector('.ajout')).map(t => t.querySelector('.tile-link').dataset.slug));
  fs.mkdirSync(path.join(repo, 'exemples/prompts'), { recursive: true });
  let n = 0;
  for (const slug of recettes) {
    n++;
    await page.goto(`http://localhost:${port}/#carte/${slug}`); await page.waitForSelector('#fiche[open]');
    await page.fill('#prompt-sujet', sujet); await page.fill('#prompt-public', publicCible);
    await page.locator('#fiche-contenu .prompt-form [type="submit"]').click({ force: true }); await page.waitForTimeout(100);
    fs.writeFileSync(path.join(repo, 'exemples/prompts', `${String(n).padStart(2, '0')}-${slug}.md`), await page.locator('#prompt-texte').inputValue());
  }
  await b.close(); srv.close();
  console.log('prompts extraits :', n);
})();
