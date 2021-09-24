function createRectangleObject(width, height, color) {

    let colorWithFirstCharUppercased = color.charAt(0).toUpperCase() + color.slice(1);
    let rectangle = {
        width: width,
        height: height,
        color: colorWithFirstCharUppercased,
        calcArea() {
            return this.width * this.height;
        }
    }

    return rectangle;
}

let rect = createRectangleObject(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
