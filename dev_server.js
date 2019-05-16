const Bundler = require('parcel-bundler');
const express = require('express');
let bundler = new Bundler('index.html');
let app = express();
var net = require('net');
// if need proxy use http-proxy-middleware
// add next two line

// const proxy = require('http-proxy-middleware');
// app.use(
//   '/api',
//   proxy({
//     target: 'http://localhost:3001'
//   })
// )

app.use(bundler.middleware());
app.listen(3000);


