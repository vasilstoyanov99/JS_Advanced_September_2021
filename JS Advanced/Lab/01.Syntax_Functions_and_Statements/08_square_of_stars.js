function printRectangle(size = 5) {

    for (let currRow = 1; currRow <= size; currRow++) {
        var elements = [];
        for (let currStar = 1; currStar <= size; currStar++) {
            elements.push('*');
        }
        console.log(elements.join(' '));
    }
}