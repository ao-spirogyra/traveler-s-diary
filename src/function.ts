import puppeteer from 'puppeteer';
import FormData from 'form-data';
import fetch from 'node-fetch';
import fs from 'fs';

export const takeSnapshots = async (url) => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.setViewport({
    width: 1920,
    height: 1080
  });
  try {
    await page.goto(url);
    await page.screenshot({path: 'puppeteer/tmp.png', fullPage:true});
    await browser.close();
  } catch {
    return
  }
  


  const formData = new FormData();
  formData.append('access_token', '5d80413d3c0895f5acb9eb162ca2341e4f496e2bd51bb941e160989fdf468f22');
  formData.append('referer_url', url);
  formData.append('desc', '#extended-browser-history');

  const imagedata = fs.createReadStream('puppeteer/tmp.png');
  formData.append('imagedata', imagedata);
  
  await fetch('https://upload.gyazo.com/api/upload', {
    method: 'POST',
    body: formData
  }).then((response) => {
    if (response.status !== 200) {
      console.log('there was a problem. Status Code: ' + response.status)
    }
  },(e) => {
    console.log('Fetch error'+ e);
  });
}

