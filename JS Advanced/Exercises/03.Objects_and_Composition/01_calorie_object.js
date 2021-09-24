function createObject(dataArr) {

    let object = {};

    for (let index = 1; index <= dataArr.length; index+=2){
    object[dataArr[index - 1]] = Number(dataArr[index]);
    }

    console.log(object);
}