class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    get diameter() {
        return this._radius * 2;
    }

    set diameter(newDiameter) {
        this._radius = newDiameter / 2;
    }

    get area() {
        return Math.PI * Math.pow(this._radius, 2);
    }
}