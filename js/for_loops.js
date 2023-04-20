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

//How Does This Work????
    function pyramid() {
        for (let i = 1; i < 10; i++) {
            let string = "";
            for(let y = 1; y <= i; y++ ){
                string = string + i;
            }
            console.log(string);//\n starts a new line, so everytime the initial for loop runs it starts a new line
        }
    }
pyramid();


function minusFive(){
    for(let i = 100; i > 0; i-=5){
        console.log(`${i}`);
    }
}

minusFive();







})();