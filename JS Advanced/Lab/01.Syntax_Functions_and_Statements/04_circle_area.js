function calculateCircleArea(radius) {
    let inputType = typeof radius;
    if (inputType == 'number') {
        let circleArea = Math.pow(radius, 2) * Math.PI;
        console.log(circleArea.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}