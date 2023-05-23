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

function addEmUp(arr) {
    let sum = 0;
    arr.forEach(function (num) {
        sum += num
    })
    return sum;
}

function explainString(str) {
    return {
        string: str,
        numberOfEs: countEs(str),
        isEvenLength: str.length % 2 === 0
    }
}

const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "September 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

function extractNames(arr){
    let bucket = [];
    arr.forEach(function(el){
        bucket.push(el.name);
    })
    return bucket;
}

const getTallest = function(arr) {
    let tallest = {heightInMM: 0};
    arr.forEach(function(obj) {
        if (obj.heightInMM > tallest.heightInMM) {
            tallest = obj;
        }
    });
    return tallest;
};

function singleFurColor(arr) {
    let bucket = [];
    arr.forEach(function(el){
        if(el.fur.length === 1){
            bucket.push(el)
        }
    });
    return bucket;
}

function numArray(num) {
    return {
        number: num,
        evenOrOdd: (num % 2 === 0) ? "even" : "odd",
        factors: findFactors(num),
        numberOfDigits: (`${num}`.length)
    }
}

function multiplyElementsByThree(arr){
    let bucket = [];
    arr.forEach(function(el){
       bucket.push(el * 3)
    });
    return bucket;
}

//W3RESOURCES.COM FOR TUTORIALS AND EXERCISES