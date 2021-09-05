function getSortedArray(arr) {

    let sortedArray = [];

    for (const number of arr) {

        if (number < 0) {
            sortedArray.unshift(number);
        } else {
            sortedArray.push(number);
        }
    }

    return sortedArray;
}