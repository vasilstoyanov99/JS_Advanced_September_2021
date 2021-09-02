function findGreatestCommonDivisor(a, b) {
    let greatestCommonDivisor;

    for (let currDivisor = 0; currDivisor <= a; currDivisor++) {
        if (a % currDivisor == 0 && b % currDivisor == 0) {
            greatestCommonDivisor = currDivisor;
        }
    }

    console.log(greatestCommonDivisor);
}