const config = require('./config/config');
const express = require('express');

const app = express();
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
  if (fs.existsSync('./xlx/final-FHI-Group3.json')) {
    //file exist
    console.log('DB is available');
  } else {
    buildDB.buildData();
    console.log('build file');

  }
} catch (err) {
  console.error(err)
}
var content = fs.readFileSync('./xlx/final-FHI-Group3.json', 'utf8')
gData = JSON.parse(content);

console.log(process.env);

app.get('/', (req, res) => {
  res.send({ express: `Connected to NodeJS server  ${process.env.HOSTNAME}` });
})

app.get('/grocery1', (req, res) => {
  const grocery1 = gData["All Items"].slice(0, 182);
  res.send(grocery1);
})


server = app.listen(config.port, () => {
  console.log(`Listening to port ${config.port}`);
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.log('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  console.log(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  console.log('SIGTERM received');
  if (server) {
    server.close();
  }
});
