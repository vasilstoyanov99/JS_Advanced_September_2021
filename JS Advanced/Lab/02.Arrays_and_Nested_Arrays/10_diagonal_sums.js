function calculateAndPrintTheSumOfDiagonals(matrix) {

    let primaryDiagonalSum = 0.00;
    let secondaryDiagonalSum = 0.00;

    for (let index = 0; index < matrix.length; index++) {

        primaryDiagonalSum += matrix[index][index];
        secondaryDiagonalSum += matrix[index][matrix.length - index - 1];
    }

    console.log(`${primaryDiagonalSum} ${secondaryDiagonalSum}`);
}