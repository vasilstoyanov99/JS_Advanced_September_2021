class List {
    constructor() {
        this.list = [];
        this.size = this.list.length;;
    }

    add(element) {
        this.list.push(element);
        this.list.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        if (index < 0 || index >= this.list.length) {
            throw new RangeError('The provided index is out of range!');
        }

        this.list.splice(index, 1);
        this.size--;
    }

    get(index) {
        if (index < 0 || index >= this.list.length) {
            throw new RangeError('The provided index is out of range!');
        }

        return this.list[index];
    }
}
