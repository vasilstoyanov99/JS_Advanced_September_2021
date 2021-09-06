function sortAndPrintArray(arr) {

    arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    for (let index = 0; index < arr.length; index++)
        console.log(`${index + 1}.${arr[index]}`);
}