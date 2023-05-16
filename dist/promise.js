"use strict";
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve("ok");
    }
    else {
        reject("ng");
    }
});
promise.then((result) => { throw new Error("aaa"); }, (error) => console.log(`reject: ${error}`));
//上のコードと等価
// promise
//   .then((result) => {throw new Error("aaa")})
//   .catch((error) => console.log(`reject: ${error}`));
