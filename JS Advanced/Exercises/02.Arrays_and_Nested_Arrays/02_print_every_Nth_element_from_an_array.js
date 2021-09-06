function getArray(arr, skipCount) {

    let newArr = [];

    for (let index = 0; index < arr.length; index += skipCount)
        newArr.push(arr[index]);

    return newArr;
}