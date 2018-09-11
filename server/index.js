const path = require('path');
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();

app.use(bodyParser.json());

app.get('/apk/getArtical', (req, res, next) => {
  res.json ({
    data: '后台返回的结果 getArtical'
  })
})

app.get('/getArtical', (req, res, next) => {
  res.json ({
    data: '后台返回的结果 getArtical without api'
  })
})
// 监听端口
app.listen(3000);
console.log("成功监听3000端口");