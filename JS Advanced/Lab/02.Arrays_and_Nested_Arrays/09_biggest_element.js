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