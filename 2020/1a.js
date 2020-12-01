const fs = require('fs');
const readline = require('readline');
const stream = require('stream');

const instream = fs.createReadStream('1.txt');
const outstream = new stream;
const rl = readline.createInterface(instream, outstream);

const array = [];
let first = 0;
let second = 0;
let third = 0;

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
    newArray.forEach((ingredient => {

        for (let i = 0; i < newArray.length; i++) {
            for (let j = 0; j < newArray.length; j++) {

                if (parseInt(ingredient) + parseInt(newArray[i]) + parseInt(newArray[j]) == 2020) {
                    first = parseInt(ingredient)
                    second = parseInt(newArray[i])
                    third = parseInt(newArray[j])
                }

            }
        }
    }))
    console.log(first, second, third)
    console.log(first * second * third)




})
