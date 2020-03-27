'use strict';
// request：HTTP リクエストを簡単に送ることができるライブラリ
const request = require('request');
request('https://www.google.com', (error, response, body) => {
  console.log(body);
});