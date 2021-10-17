(function extendArrayPrototype() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (count) {
        let result = [];

        for (let i = count; i < this.length; i++) {
            result.push(this[i]);
        }

        return result;
    }

    Array.prototype.take = function (count) {
        let result = [];

        for (let i = 0; i <= count; i++) {
            result.push(this[i]);
        }

        return result;
    }

    Array.prototype.sum = function () {
        return this.reduce((acc, e) => acc += e);
    }

    Array.prototype.average = function () {
        return this.sum() / this.length;
    }
})()