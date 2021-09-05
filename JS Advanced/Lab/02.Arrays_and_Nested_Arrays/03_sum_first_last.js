function getSumOfFirstAndLastElement(arr) {

    let fistElement = Number(arr.shift());
    let lastElement = Number(arr.pop());

    return fistElement + lastElement;
}