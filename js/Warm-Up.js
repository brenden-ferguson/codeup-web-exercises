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