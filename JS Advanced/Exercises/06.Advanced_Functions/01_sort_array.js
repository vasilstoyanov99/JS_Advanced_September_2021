function sortArray(arr, order) {
    let modify = (function (){
       return {
           asc(){
               arr = arr.sort((a, b) => a - b);
           },
           desc(){
               arr = arr.sort((a, b) => b - a);
           }
       }
    })();

    modify[order](arr);

    return arr;
}