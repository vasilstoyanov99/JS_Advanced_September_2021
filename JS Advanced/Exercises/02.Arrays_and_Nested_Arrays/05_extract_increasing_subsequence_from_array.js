function filterArray(arr) {

    let filteredArr = [];
    let currBigestNumber = 0;

    for (let index = 0; index < arr.length; index++) {

        let currNumber = arr[index];

        if (currNumber >= currBigestNumber) {
            currBigestNumber = currNumber;
            filteredArr.push(currBigestNumber);
        }
    }

    return filteredArr;
}