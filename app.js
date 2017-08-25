const  scraper = require('./scraper');
const fs = require('fs');
const url = 'http://imgur.com/gallery/zNZS4';
const path = 'text.txt';
//callbackexample
/*
scraper.imgScrape(url,(data) =>{
    console.log('data from  scraper recieved');
    console.log(data);
})*/

scraper.imgScrape2(url)
    .then((data)=>{
    console.log('data from scraper recieved');
    fs.writeFile(path,JSON.stringify(data),(error) =>{
        if(error)
        {
            console.log(error);
        }
        console.log('Successfully wrote to ' +path);

    })
    })
    .catch((error)=>{
    console.log('error from scraping data');
    })
