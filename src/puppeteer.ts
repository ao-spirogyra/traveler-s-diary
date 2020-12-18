export const takeSnapshots = async (url) => {
  const puppeteer = require('puppeteer');
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.setViewport({
    width: 1920,
    height: 1080
  });
  await page.goto(url);
  await page.screenshot({path: 'puppeteer/tmp.png', fullPage:true});
  await browser.close();
}
