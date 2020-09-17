var mammoth = require("mammoth");
var fs = require('fs')
var path = require('path')


// convert Terms & use to Html
mammoth
  .convertToHtml({ path: "./assets/docs/agreements/TC.docx" })
  .then(function(result) {
    var html = result.value;
    fs.writeFile(path.resolve(__dirname, './assets/docs/agreements/terms.txt'), html, (err) => {
        if(err) throw err;
        console.log('file created')
    })
  })
  .done();


  // convert Privacy Policy to Html
  mammoth
  .convertToHtml({ path: "./assets/docs/agreements/PrivacyPolicy.docx" })
  .then(function(result) {
    var html = result.value;
    fs.writeFile(path.resolve(__dirname, './assets/docs/agreements/privacy.txt'), html, (err) => {
        if(err) throw err;
        console.log('file created')
    })
  })
  .done();

  // convert Customer-Contact to html
  mammoth
  .convertToHtml({ path: "./assets/docs/agreements/CustomerContact.docx" })
  .then(function(result) {
    var html = result.value;
    fs.writeFile(path.resolve(__dirname, './assets/docs/agreements/contact.txt'), html, (err) => {
        if(err) throw err;
        console.log('file created')
    })
  })
  .done();


// convert Terms & use to Html
mammoth
  .convertToHtml({ path: "./assets/docs/agreements/ABOUT.docx" })
  .then(function(result) {
    var html = result.value;
    fs.writeFile(path.resolve(__dirname, './assets/docs/agreements/about.txt'), html, (err) => {
        if(err) throw err;
        console.log('file created')
    })
  })
  .done();
