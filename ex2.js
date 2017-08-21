var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 8000;
var url = "https://www.indeed.com/cmp/EDC-Corporation/jobs/Software-Developer-13c7723af691e3bd?sjdu=QwrRXKrqZ3CNX5W-O9jEvRFd8FQI4DEv5V74lSpSnHYj0lC7q7rWLODp3xLtDO7CfgCfVCW7ZFM8XGAokfdMiw";

request(url,function (err,resp,body) {
    var $ = cheerio.load(body);
    var companyName = $('.company');
    var companyNameText = companyName.text();
    var jobTitle = $('.jobtitle font');
    var jobTitleText = jobTitle.text()
    var location = $('.location');
    var locationText =location.text();
    var summary = $('#job_summary p');
    var summaryText = summary.text();

    var job = {
        jobTitle : jobTitleText,
        location: locationText,
        companyName: companyNameText,
        summary: summaryText
    }
    console.log(job);
})
app.listen(port);
console.log('server is listening on' + port);