function getEqualNeighborsPairsCount(matrix) {

    let pairsCount = 0;

    for (let row = 0; row < matrix.length - 1; row++) {

        for (let col = 0; col < matrix[row].length; col++) {

            let upElement = matrix[row][col];
            let downElement = matrix[row + 1][col];

            if (upElement === downElement)
                pairsCount++;
        }
    }

    for (let row = 0; row < matrix.length; row++) {

        for (let col = 0; col < matrix[row].length - 1; col++) {

            let leftElement = matrix[row][col];
            let rigthElement = matrix[row][col + 1];

            if (leftElement === rigthElement)
                pairsCount++;
        }

    }

    return pairsCount;
}