function addOrRemoveElements(commandsArr) {

    let currValue = 0;
    let arr = [];

    for (const command of commandsArr) {

        currValue++;

        if (command == 'add')
            arr.push(currValue);
        else
            arr.pop();
    }

    if (arr.length == 0)
        console.log('Empty');
    else
        console.log(arr.join('\n'));
}