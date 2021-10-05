function createFibonator() {
    let a = 0;
    let b = 1;
    let currNumber = 0;
    let nextNumber = 0;

    return() => {
        nextNumber = b;
        currNumber = a + b;
        a = b;
        b = currNumber;
        return nextNumber;
    }
}