function findAndPrintTheTwoSmallestNumbers(arr) {

    arr.sort((a, b) => a - b);
    let smallestNumbers = [];
    smallestNumbers.push(arr[0]);
    smallestNumbers.push(arr[1]);

    console.log(smallestNumbers);
}