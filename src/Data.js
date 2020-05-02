import React from 'react';

const request = require('request');
const cheerio = require('cheerio');

export default class Data extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            url: 'https://va.milesplit.com/meets/385842/results/691644/raw',
        };
    }

    performanceList(url) {
        let list;
        request(url, (error, response, html) =>{
            if(!error && response.statusCode == 200){
                const $ = cheerio.load(html);
                const content  = $('#page main #content article #meetResultsBody');
                //console.log(content.html());
                console.log(content.text());
                list = content.text();
            }
        });

        return list;
    }


    render() {
        return (
            <div>
                {this.performanceList('https://va.milesplit.com/meets/385842/results/691644/raw')};
            </div>
        );
    }

    
}