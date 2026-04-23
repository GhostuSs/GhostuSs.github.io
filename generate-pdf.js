/**
 * Generates cv-ru.pdf and cv-en.pdf into assets/
 * Run: node generate-pdf.js
 */

const puppeteer = require('puppeteer');
const path = require('path');

// Extra CSS injected only during PDF generation — hides more to fit 2 pages
const PDF_EXTRA_CSS = `
  /* Keep max 2 bullets per list (projects + general) */
  .bullets li:nth-child(n+3) { display: none !important; }

  /* Keep max 3 projects per experience block */
  .projects .project:nth-of-type(n+4) { display: none !important; }

  /* Hide MCArt experience entirely (3rd .exp in #section-experience) */
  #section-experience .exp:nth-of-type(3) { display: none !important; }

  /* Extra tight spacing */
  .section { margin-bottom: 5pt !important; }
  .projects { gap: 3pt !important; }
  .project { padding: 3pt 5pt !important; }
`;

async function generate(lang) {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });
  const page = await browser.newPage();

  const filePath = path.resolve(__dirname, 'index.html');
  await page.goto(`file://${filePath}?lang=${lang}`, { waitUntil: 'networkidle0' });

  // Wait for JS render
  await page.waitForSelector('.hero');

  // Inject extra CSS on top of print.css
  await page.addStyleTag({ content: PDF_EXTRA_CSS });

  const outPath = path.resolve(__dirname, `assets/cv-${lang}.pdf`);
  await page.pdf({
    path: outPath,
    format: 'A4',
    printBackground: false,
    margin: { top: '8mm', right: '10mm', bottom: '10mm', left: '10mm' },
  });

  await browser.close();
  console.log(`✓ assets/cv-${lang}.pdf`);
}

(async () => {
  try {
    await generate('ru');
    await generate('en');
    console.log('Done. Commit assets/cv-ru.pdf and assets/cv-en.pdf.');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
