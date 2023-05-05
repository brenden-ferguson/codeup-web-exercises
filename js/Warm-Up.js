function seven() {
    return 7;
}

function findFactors(input) {
    let factorArray = [];
    if (typeof input === "number" && !isNaN(input)) {
        for (i = 1; i <= input; i++) {
            if (input % i === 0) {
                factorArray.push(i);
            }
        }
        return factorArray;
    } else {
        return false;
    }
}


function countEs(str) {
    if (typeof str === "string") {
        let count = 0
        let normalizedStr = str.toLowerCase();
        for (i = 0; i < str.length; i++) {
            if (normalizedStr.charAt(i) === 'e') {
                count++;
            }
        }
        return count;
    } else {
        return false;
    }
}

function hasEs(str) {
    return countEs(str) > 0;
}

function fizzBuzz() {
    for (i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else {
            console.log(i);
        }
    }
}

function squared() {
    let i = 2;
    do {
        console.log(i);
        i *= i;
    } while (i < 1000000);
}