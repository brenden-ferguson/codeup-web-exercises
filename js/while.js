//"use strict";

function timesTwo() {
    let num = 1
    while (num < 40000) {
        num *= 2
        console.log(num);
    }
}

timesTwo();

//cones has to equal 0 at the end
//make random number that is between 50 and 100 to be the cone start number
//generate another number (1-5)for how many cones are being sold


function noCones() {
    let leftCones = Math.floor(Math.random() * 50) + 50;
        do {
            let sellCones = Math.floor(Math.random() * 5) + 1;
            if (sellCones <= leftCones) {
                console.log(`${sellCones} cones sold.`);
                leftCones -= sellCones;
                console.log(`${leftCones} are left.`);
            } else {
                console.log(`I only have ${leftCones} cone(s) to sell.`);
            }
        } while (leftCones > 0);
        console.log('Yay, I sold them all.');
}
noCones();