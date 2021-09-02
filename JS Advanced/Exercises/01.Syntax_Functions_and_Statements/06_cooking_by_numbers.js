function cookNumbers(numberAsString, instruction1, instruction2,
    instruction3, instruction4, instruction5) {

    let number = Number(numberAsString);
    let currResult = number;
    let array = [instruction1, instruction2,
        instruction3, instruction4, instruction5
    ];

    for (let index = 0; index < array.length; index++) {
        let instruction = array[index];

        switch (instruction) {
            case 'chop':
                currResult /= 2;
                console.log(currResult);
                break;
            case 'dice':
                currResult = Math.sqrt(currResult);
                console.log(currResult);
                break;
            case 'spice':
                currResult += 1;
                console.log(currResult);
                break;
            case 'bake':
                currResult *= 3;
                console.log(currResult);
                break;
            case 'fillet':
                let toSubtract = currResult * 20.00 / 100.00;
                currResult = currResult - toSubtract;
                console.log(currResult);
                break;
        }
    }
}