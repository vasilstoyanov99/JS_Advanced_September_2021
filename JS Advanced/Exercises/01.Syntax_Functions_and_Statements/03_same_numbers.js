function solve(number) {
    let areAllDigitsTheSame = true;
    let numberAsString = String(number);
    let sumOfAllDigits = Number(numberAsString[0]);

    for (let currIndex = 0; currIndex < numberAsString.length - 1; currIndex++) {

        if (numberAsString[currIndex] != numberAsString[currIndex + 1]) {
            areAllDigitsTheSame = false;
        }

        sumOfAllDigits += Number(numberAsString[currIndex + 1]);
    }

    console.log(areAllDigitsTheSame);
    console.log(sumOfAllDigits);
}