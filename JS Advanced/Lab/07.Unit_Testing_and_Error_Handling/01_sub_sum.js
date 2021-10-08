function sumRange(arr, start, end) {
    if (!Array.isArray(arr)){
        return NaN;
    }
    if (start < 0){
        start = 0;
    }
    if (end > arr.length - 1){
        end = arr.length;
    }

    let arrSplit = arr.splice(start, end + 1);
    let sum = 0;

    for (const arrElement of arrSplit) {
        sum += Number(arrElement);
    }

    return sum;
}
