function sortAndPrintArray(arr) {

    const twoCritetiaSort = (a, b) => {

        if (a.length == b.length)
            return a.localeCompare(b);
        else
            return a.length - b.length;
    }

    arr.sort(twoCritetiaSort);

    console.log(arr.join('\n'));
}