var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 8000;
var url = "https://in.pinterest.com/pin/513903007455678032/";

request(url,function (err,resp,body) {
    var pin = {};
    var $ = cheerio.load(body);
    var img = $("meta[itemprop = 'image']").get(1);
    var  $img = $(img).attr('.content');
    var $desc = $("meta[itemprop = 'text']").attr('content');

    var pin = {
        img: $img,
        desc : $desc,
        url:url
    }
console.log("scrapped:",pin);
})
app.listen(port);
console.log('server is listening on' + port);