function solution(initialNumber) {
    return function add(number) {
        return number + initialNumber;
    }
}
