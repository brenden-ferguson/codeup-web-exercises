"use strict";

(function () {

    function skipNumber() {
        let askNumber;
        while(true){
            askNumber = prompt('Pick an odd number between 1 and 50.')
            if(askNumber % 2 !== 0 && askNumber > 0 && askNumber < 50)
            break;
        }
        for (let i = 1; i < 50; i++) {
            if (i == askNumber) {
                console.log(`Yikes, Skipping ${askNumber}!`);
                continue;
            }
            if (i % 2 !== 0) {
                console.log(`Number ${i} is odd.`);
            }

        }

    }

    skipNumber();


    

})();