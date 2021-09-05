function findAndPrintTheTwoSmallestNumbers(arr) {

    let sortedArr = arr.sort((a, b) => a - b);
    let smallestNumbers = [];
    smallestNumbers.push(sortedArr[0]);
    smallestNumbers.push(sortedArr[1]);

    console.log(smallestNumbers);
}