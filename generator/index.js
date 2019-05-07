'use strict';

const path = require('path')
const nunjucks = require('nunjucks')
const fs = require('fs')

let templateRoot = path.join(__dirname, 'templates');
let indexRoot = path.resolve(__dirname,'../docs');
let data = fs.readFileSync(path.join(__dirname,'data.json'))

let config = JSON.parse(data);

// make the output directory
nunjucks.configure(templateRoot);

// render the output, and format is needed
fs.writeFileSync(path.join(indexRoot,'index.html'),nunjucks.render('index.njk', config));
fs.writeFileSync(path.join(indexRoot,'script.js'),nunjucks.render('script.njk', config));

