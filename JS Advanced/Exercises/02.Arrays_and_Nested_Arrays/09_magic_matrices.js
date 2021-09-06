function checkIfMatrixIsMagicalAndPrintTheResult(matrix) {

    let isMatrixMagical = true;

    for (let row = 0; row < matrix.length; row++) {

        let currRowNumbersSum = 0.00;

        for (const currNumber of matrix[row])
            currRowNumbersSum += currNumber;

        let currColNumbersSum = 0.00;

        for (let col = 0; col < matrix[0].length; col++)
            currColNumbersSum += matrix[0][col];

        if (currRowNumbersSum !== currColNumbersSum) {

            isMatrixMagical = false;
            break;
        }
    }

    console.log(isMatrixMagical);
}