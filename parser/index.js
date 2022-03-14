import HTMLParser from 'node-html-parser';
import fetch from 'node-fetch'
import fs from 'fs';
import http from 'http';
import https from 'https';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
// const got = require('got');
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
console.log('argv: ', process.argv[2]);

const url = 'https://www2.maschio.com/catalog/product/SP-russia/ru_RU';
const site = 'https://www2.maschio.com'

async function download(url, idx, picts) {
  console.log('url: ', url);
  let file = '';
  if(idx == undefined) {
    console.log('undef');
    const fName = process.argv[2] + ".jpg";
    file = fs.createWriteStream('/Users/chistov/www/agrofin-nextjs/public/assets_item_gasp/'
      + fName);
  }
  else {
    const fName = process.argv[2] + '-' + idx + ".jpg";
    picts.push(fName);
    file = fs.createWriteStream('/Users/chistov/www/agrofin-nextjs/public/assets_item_gasp/'
      + fName);
  }

  await https.get("https://www2.maschio.com" + url, function(response) {
    response.pipe(file);
  });
}

function extractData(root){
  const hdr = root.querySelector('.titlebottom').text;

  // console.log('query: ', root.querySelectorAll('.gallery .items div .image').getAttribute('src'));
  const imgs = root.querySelectorAll('.gallery .items div .image');
  let url = '';
  const picts = []
  imgs.forEach(async (i, idx) => {
    console.log('query: ', i._attrs.href);
    url = '/' + i._attrs.href;
    await download(url, idx, picts);
  })
  download(root.querySelector('#productImage img').getAttribute('src'));

  // let json = require("/Users/chistov/www/agrofin-nextjs/public/assets_item_gasp/" + process.argv[2] + ".json");
  // json = {...json, picts};

  // writeJson(json);
  // return;

  let buff = root.querySelectorAll('.customtext.typography > p')
  let overview = '';
  buff.map((it, idx) => !idx ? overview += it.text: overview += "\n" + it.text)


  const access = [];
  let std = [];
  console.log('typo: ', root.querySelectorAll('.contentTab.typography'));
  if( root.querySelectorAll('#contentTabber').length == 1 ){
    /* std tab */
    buff = root.querySelectorAll('#contentTabber ul li')
    buff.forEach(it => {
      std.push(it.textContent);
    });
  }
  else {
    /* std tab */
    const tabs = root.querySelectorAll('.contentTab.typography');
    buff = tabs[0].querySelectorAll('ul li');
    buff.forEach(it => {
      std.push(it.textContent);
    });

    buff = tabs[1].querySelectorAll('ul li');
    buff.forEach(it => {
      access.push(it.textContent);
    });

  }

  /* end std */

  const tr = root.querySelectorAll('tbody tr');
  const tech = {};
  tr.forEach((td, idx) => {
    tech['tech' + idx] = [];
    const len = tr[idx].getElementsByTagName("td").length;
    // console.log('len: ', len);
    for(let i = 0; i < len; ++i) {
      // console.log('text: ', tr[idx].getElementsByTagName("td")[i].textContent.trim())
      tech['tech' + idx].push(tr[idx].getElementsByTagName("td")[i].textContent.trim())
    }
  })

  const descr = {
    hdr,
    overview,
    techHdrs: ["ВЕРСИЯ","1-1.png", "1-2.png", "1-3.png", "1-4.png", "1-6.png"],
    ...tech,
    std,
    access,
    picts
  }

  console.log('descr: ', descr);
  writeJson(descr);
}

function writeJson(data) {
  data = JSON.stringify(data);
  fs.writeFileSync('/Users/chistov/www/agrofin-nextjs/public/assets_item_gasp/' + process.argv[2] + '.json', data);
}

fetch(url)
.then(res => res.text())
.then(body => {
  const root = HTMLParser.parse(body);
  return root;
})
.then ((root) => extractData(root))
.catch(err => {
  console.log('ERR: ', err);
});
