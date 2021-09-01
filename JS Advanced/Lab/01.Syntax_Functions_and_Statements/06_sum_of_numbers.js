function sum(startAstring, endAsString) {
    let start = Number(startAstring);
    let end = Number(endAsString);
    let result = 0;

    for (let i = start; i <= end; i++) {
        result += i;
    }

    console.log(result);
}