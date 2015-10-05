#!/usr/bin/env node

var questionStore = require('./questionStore.json');
var fs = require('fs');

(function () {
    'use strict';
    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    rl.on('line', function(line){
        if (questionStore.indexOf(line) === -1) {
            questionStore.push(line);
        }
    });

    rl.on('close', function () {
        console.log(questionStore);
        fs.writeFileSync('./questionStore.json', JSON.stringify(questionStore), 'utf8');
    })

}())
