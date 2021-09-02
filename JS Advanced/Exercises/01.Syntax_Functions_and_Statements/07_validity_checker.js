function printValidity(x1, y1, x2, y2) {

    function getDistance(x1, y1, x2, y2) {
        let distH = x1 - x2;
        let distY = y1 - y2;
        return Math.sqrt(distH ** 2 + distY ** 2);
    }

    const partialValidMessage = 'to {0, 0} is valid';
    const partialInValidMessage = 'to {0, 0} is invalid';

    if (Number.isInteger(getDistance(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} ${partialValidMessage}`);
    } else {
        console.log(`{${x1}, ${y1}} ${partialInValidMessage}`);
    }

    if (Number.isInteger(getDistance(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} ${partialValidMessage}`);
    } else {
        console.log(`{${x2}, ${y2}} ${partialInValidMessage}`);
    }

    if (Number.isInteger(getDistance(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}