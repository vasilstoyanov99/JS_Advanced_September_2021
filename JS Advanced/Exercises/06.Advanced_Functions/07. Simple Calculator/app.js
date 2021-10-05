function calculator() {
    let elementA;
    let elementB;
    let resultElement;

    return {
        init (selector1, selector2, resultSelector){
            elementA = document.querySelector(selector1);
            elementB = document.querySelector(selector2);
            resultElement = document.querySelector(resultSelector);
        },
        add() {
            resultElement.value = Number(elementA.value)
            + Number(elementB.value);
        },
        subtract() {
            resultElement.value = Number(elementA.value)
                - Number(elementB.value);
        }
    }
}
