import puppeteer from 'puppeteer';
import FormData from 'form-data';
import fetch from 'node-fetch';
import fs from 'fs';

export const takeSnapshots = async (url,accessToken) => {
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
  formData.append('access_token', accessToken);
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

let cache: string
export const getAccessToken = async (query: string): Promise<String> => {
  const formData = new FormData();
  const code = query
  const client_id = 'f25d2754cabdca35725e0bc8611f5d609fbbf334198c68476c6edda718ec6e12';
  const client_secret: string = fs.readFileSync('client_secret', 'utf-8');
  const redirect_uri = 'https://dry-thicket-62282.herokuapp.com/token';
  const grant_type = 'authorization_code';
  formData.append('code', code)
  formData.append('client_id', client_id)
  formData.append('client_secret', client_secret)
  formData.append('redirect_uri', redirect_uri)
  formData.append('grant_type', grant_type)
  await fetch('https://api.gyazo.com/oauth/token', {
    method: 'POST',
    body: formData
  }).then( async (response) => {
    if (response.status === 200) {
      const res = await response.json()
      if (res) {
        cache = res['access_token']
      }
      
    }
    
  })
  return cache
}
