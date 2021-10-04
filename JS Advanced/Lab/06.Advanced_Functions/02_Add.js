function solution(initialNumber) {
    return function add(number) {
        return number + initialNumber;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
