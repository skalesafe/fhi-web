const express = require('express');
const router = express.Router();
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
const compression = require('compression');
const buildDB = require('./buildDB');
const fs = require('fs');

var gData;

app.use(helmet());
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

try {

  console.log('get data..');
  if (!fs.existsSync('./xlx/final-FHI-Group3.json')) {
    //file does not exist
    buildDB.buildData();
    console.log('build file');
  }
} catch (err) {
  console.error(err)
}
var content = fs.readFileSync('./xlx/final-FHI-Group3.json', 'utf8')
gData = JSON.parse(content);


router.get('/', (req, res) => {
  res.send({ express: 'Connected to NodeJS server' });
})

router.get('/grocery1', (req, res) => {
  const grocery1 = gData.slice(0, 25);
  console.log(grocery1);

  return grocery1;
})

module.exports = app;

