function rotateAndPrintArray(arr, count) {

    for (let index = 0; index < count; index++) {

        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }

    console.log(arr.join(' '));
}