function getTheBiggerHalf(arr) {

    arr.sort((a, b) => a - b);
    let startIndex = arr.length / 2;
    let slicedArr = arr.slice(startIndex, arr.length + 1);

    return slicedArr;
}