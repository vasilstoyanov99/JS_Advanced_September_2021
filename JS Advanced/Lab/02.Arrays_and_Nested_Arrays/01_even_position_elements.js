function getEvenPositionElements(array) {

    let result = '';

    for (let index = 0; index < array.length; index += 2) {
        result += array[index] + ' ';
    }

    return result;
}