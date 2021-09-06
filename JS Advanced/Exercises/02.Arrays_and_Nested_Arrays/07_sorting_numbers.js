function getSortedArray(arr) {

    arr.sort((a, b) => a - b);

    for (let index = 1; index < arr.length; index += 2) {

        const element = arr.pop();
        arr.splice(index, 0, element);
    }

    return arr;
}

console.log(getSortedArray([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));