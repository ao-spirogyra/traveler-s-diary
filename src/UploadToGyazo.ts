

export const uploadToGyazo = async() => {
  const FormData = require('form-data');
  const fetch = require('node-fetch');
  const formData = new FormData();
  const fs = require('fs');
  const image_url = await fs.readFileSync('puppeteer/tmp.png', {encoding: 'base64'}, (err, data) => {
    if (err) {
      console.log(`something went wrong ${err}`)
    } else {
      console.log('suceeded in reading file')
      Promise.resolve(data)
    }
  });
  formData.append('image_url', image_url);
  formData.append('referer_url', 'https://gyazo.com');
  formData.append('client_id', '4466b5521d01325cff8e619e41f3dd1e6c051fda3c91bee198cd8e2a4d0a0983');
  fetch('https://upload.gyazo.com/api/upload/easy_auth', {
    method: 'POST',
    body: formData
  }).then((response) => {
    console.log(response)
  },(err) => {
    console.log(err)
  });
}

// const imageToBase64 = (imagePath) => {
//   const image = new Image();
//   image.src = imagePath
//   const canvas = document.createElement('canvas');
//   canvas.setAttribute('width', String(image.width));
//   canvas.setAttribute('width', String(image.height));
//   canvas.getContext('2d')?.drawImage(image, 0, 0);
//   return canvas.toDataURL("image/png");
// }
