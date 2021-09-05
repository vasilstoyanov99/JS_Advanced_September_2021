function getTheBiggestElement(matrix) {

    let arr = [];

    for (let row = 0; row < matrix.length; row++) {

        for (let col = 0; col < matrix[row].length; col++) {

            arr.push(matrix[row][col]);
        }
    }

    arr.sort((a, b) => b - a);

    return arr[0];
}

getTheBiggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]);