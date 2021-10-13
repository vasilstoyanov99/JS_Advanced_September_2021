class Hex {
    constructor(value) {
        this.value = value;
    }

	valueOf() {
        return this.value;
    }

	toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }

	plus(numberOrHex) {
        if (typeof numberOrHex === 'number') {
            return '0x' + (this.value + numberOrHex).toString(16).toUpperCase();
        } else {
            const number = this.parse(numberOrHex);
            return '0x' + (this.value + number).toString(16).toUpperCase();
        }
    }

	minus(numberOrHex) {
        if (typeof numberOrHex === 'number') {
            return '0x' + (this.value - numberOrHex).toString(16).toUpperCase();
        } else {
            const number = this.parse(numberOrHex);
            return '0x' + (this.value - number).toString(16).toUpperCase();
        }
    }

	parse(hex) {
        return parseInt(hex, 16);
    }
}


