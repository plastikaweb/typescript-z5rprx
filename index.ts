import * as CryptoJS from "crypto-js";

const span = document.querySelector("#spanlog");

 const url =
  "https://cdn-gate-dev.naistro.com/audio/normalized/On+My+Way_Axwell+and+Ingrosso.aac";

const myRequest = new Request(url);

fetch(myRequest, {
  mode: "cors",
  credentials: "omit"
}).then(function(response) {
  console.log("URL: " + url);

  console.log(response);

  response.blob().then(function(myBlob) {
    console.log("Blob size:" + myBlob.size);
  });
});

const data = [{id: 1}, {id: 2}]


const ciphertext = CryptoJS.AES.encrypt(
  JSON.stringify(data),
  "secret key 123"
).toString();

// Decrypt
const bytes = CryptoJS.AES.decrypt(ciphertext, "secret key 123");
const originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(originalText); // 'my message'
