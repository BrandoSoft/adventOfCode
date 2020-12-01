const fs = require('fs');
const readline = require('readline');
const stream = require('stream');

const instream = fs.createReadStream('1.txt');
const outstream = new stream;
const rl = readline.createInterface(instream, outstream);

const array = [];
let first = 0;
let second = 0;
let sum = 0;

rl.on('line', function (line) {
    // process line here
    array.push(line);
});

rl.on('close', function () {
    // do something on finish here
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i].split("x").map(function (item) {
            return parseInt(item, 10);
        }))
    }
    newArray.forEach((ingredient, index) => {

        for (let i = 0; i < newArray.length; i++) {

            if (parseInt(ingredient) + parseInt(newArray[i]) == 2020) {
                first = parseInt(ingredient)
                second = parseInt(newArray[i])
            }

        }
    })


    console.log(first * second)

});