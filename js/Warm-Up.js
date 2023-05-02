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


function countEs(input, letter) {
    let count = 0
    if (typeof input === "string") {
        for (i = 0; i < input.length; i++) {
            if (input.charAt(i) == letter.toLowerCase()) {
                count += 1
            }
        }
        return count;
    } else {
        return false;
    }
}