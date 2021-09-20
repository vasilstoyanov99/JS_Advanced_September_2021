function getPreviousDate(year, month, day) {

    let date = new Date(`${year}-${month}-${day}`);
    date.setDate(date.getDate() - 1);
    let result = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

    return result;
}

console.log(getPreviousDate(2016, 10, 1));