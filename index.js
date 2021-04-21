import puppeteer from "puppeteer";

const websiteHomepage = "https://termine.stadt-muenster.de/select2?md=1";
const timeNow = new Date().getTime();

async function launchPuppeteer(websiteHomepage) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1080,
    height: 1920*2,
    deviceScaleFactor: 1,
  });
  await page.goto(websiteHomepage);
  try {
    const dateText = await navigateWebsite(page);
    console.log(dateText);
  } catch (error) {
    console.error("Bei der navigation ist etwas schief gelaufen!");
  }
  // await page.screenshot({ path: `./screenshots/${timeNow}.png`, fullPage: true });
  await browser.close();
}

async function navigateWebsite(page) {
  await page.click("#cookie_msg_btn_yes");
  await page.click("div.grouped_concerns_panel:nth-child(1) > div:nth-child(1) > h3:nth-child(1) > a:nth-child(1)");
  // Einen Personalausweis anklicken. Sicher stellen dass es geklickt wurde
  for (var i = 0; i <= 5; i++)
    await page.click("#cnc-g-79 > div:nth-child(1) > div:nth-child(2) > span:nth-child(3) > button:nth-child(1)");
  // Einen Reisepass anklicken
  await page.click("#cnc-g-79 > div:nth-child(2) > div:nth-child(2) > span:nth-child(3) > button:nth-child(1)");
  // Weiter Knopf
  await page.click("input.sel_button:nth-child(6)");
  // waiting 1 second.
  await sleep(1000);
  // Auf das popup klicken
  const elements = await page.$x("/html/body/div[2]/div/div[3]/div/div/div[2]/div[2]/div/div/div[3]/button[1]");
  await elements[0].click();
  await sleep(3000);
  // Open dropdown menu
  await page.click(".custom-select");
  await sleep(1000);
  // Select in dropdown menu
  await page.click("li.ui-menu-item:nth-child(6)");
  await sleep(1000);
  
  const htmlContent = await page.$eval("#ui-id-2", (element) => element.innerHTML);
  const [htmlGibberish, dateText] = htmlContent.split(":");
  return dateText;
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
} 

launchPuppeteer(websiteHomepage);