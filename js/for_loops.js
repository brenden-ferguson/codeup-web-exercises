"use strict";

(function () {

    function showMultiplicationTable(number) {
        for (let i = 1; i < 11; i++) {
            console.log(`${number} * ${i} = ${number * i}`)
        }
    }

    //showMultiplicationTable(4);

    let randomTwenty = Math.floor((Math.random() * 180) + 20)

    function evenOrOdd() {
        for (let i = 0; i < 11; i++) {
            let randomTwenty = Math.floor((Math.random() * 180) + 20)
            if (randomTwenty % 2 === 0) {
                console.log(`${randomTwenty} is even.`);
            } else if (i % 2 !== 0) {
                console.log(`${randomTwenty} is odd.`);
            }
        }
    }

    //evenOrOdd();


    function pyramid() {
        for (let i = 1; i < 10; i++) {
            for(let y = 1; y <= i; y++ ){

            }
        }
    }
pyramid();
})();