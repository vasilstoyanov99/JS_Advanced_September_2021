function calculator() {
    return {
        elementA: undefined,
        elementB: undefined,
        resultElement: undefined,
        init (selector1, selector2, resultSelector){
            this.elementA = document.querySelector(selector1);
            this.elementB = document.querySelector(selector2);
            this.resultElement = document.querySelector(resultSelector);
        },
        add() {
            this.resultElement.value = Number(this.elementA.value)
            + Number(this.elementB.value);
        },
        subtract() {
            this.resultElement.value = Number(this.elementA.value)
                - Number(this.elementB.value);
        }
    }
}

