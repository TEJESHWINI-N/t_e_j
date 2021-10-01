const https = require('https');
const fs=require('fs');

https.get('https://dog.ceo/api/breeds/image/random', (resp) => {
  let todo= '';
  resp.on('data', (chunk) => {
    todo += chunk;
  });
  resp.on('end', () => {
    const info = todo
  fs.appendFile('txtt.json', info + "\n" , err => {
   if (err) {
     console.error(err)
     return
  }
})
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});