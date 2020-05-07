const request = require('request');
const cheerio = require('cheerio');
fs = require('fs');


function getPerformanceList() {
    let url = 'https://va.milesplit.com/meets/385842/results/691644/raw';
    let text = '';

    request(url, (error, response, html) =>{
        if(!error && response.statusCode == 200){
            const $ = cheerio.load(html);
            const content  = $('#page main #content article #meetResultsBody');
            //console.log(content.html());
            
            //console.log(content.text());
            writeToFile(content.text());
        }
    });

}

const writeToFile = (data) =>{
    fs.writeFile('./Data.txt', data, (err) =>{
        if(err){
            return console.log(err);
        }

        console.log('data > ./Data.txt');
    });
}




exports.performance_list = function(){
    return getPerformanceList();
};
