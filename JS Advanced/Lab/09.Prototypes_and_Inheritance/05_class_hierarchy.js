function solve() {
    class Figure {
        constructor(inputUnits = 'cm') {
            this.units = inputUnits;
        }

        get area() {

        }

        changeUnits () {
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }
    
    class Circle extends Figure{
        constructor(inputRadius) {
            super();
            this.radius = inputRadius;
        }

        get area() {
            return Math.PI * Math.pow(this.radius, 2);
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure{
        constructor(inputWidth, inputHeight, inputUnits) {
            super(inputUnits);
            this.width = inputWidth;
            this.height = inputHeight;
            this._heightCM = inputHeight;
            this._widthCM = inputWidth;
            this.changeUnits(inputUnits);
        }

        changeUnits (inputUnits) {
            this.units = inputUnits;
            if (inputUnits === 'mm') {
                this.width *= 10;
                this.height *= 10;
            } else if (inputUnits === 'm') {
                this.width *= 100;
                this.height *= 100;
            } else if (inputUnits === 'cm') {
                this.width = this._widthCM;
                this.height = this._heightCM;
            }
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }

    return {
        Figure, Circle, Rectangle
    }
}