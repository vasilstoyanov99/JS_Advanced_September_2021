function modifyArrayAndPrintIt(arr) {

    let modifiedArr = arr.filter((x, i) => i % 2 != 0)
        .map(x => x *= 2)
        .reverse();

    console.log(modifiedArr.join(' '));
}