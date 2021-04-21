import puppeteer from "puppeteer";

const websiteHomepage = "https://www.stadt-muenster.de/buergerservice/startseite";

async function launchPuppeteer(websiteHomepage) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(websiteHomepage);
  page.screenshot({ path: 'example.png ' });

  await browser.close();
}

launchPuppeteer(websiteHomepage);