
const fs = require('fs');
const readline = require('readline');
const stream = require('stream');

const instream = fs.createReadStream('2.txt');
const outstream = new stream;
const rl = readline.createInterface(instream, outstream);

const array = [];
let paper = 0;
const przyklad = [
    [2, 5, 10],
    [2, 5, 10],
    [2, 5, 10]
]

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
    // console.log(newArray[0])
    // paper += 2 * newArray[0][0] * newArray[0][1] + 2 * newArray[0][1] * newArray[0][2] + 2 * newArray[0][2] * newArray[0][0] + newArray[0][0] * newArray[0][1]

    // newArray.forEach(record => {
    //     paper+= 2*record
    // })

    newArray.forEach((record, index) => {
        paper += 2 * record[0] * record[1] + 2 * record[1] * record[2] + 2 * record[2] * record[0] + record[0] * record[1];

        console.log(paper, index)
    })

    console.log(newArray[999])

});