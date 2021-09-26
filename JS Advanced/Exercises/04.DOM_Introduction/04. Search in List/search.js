function search() {
    let resultElement = document.getElementById('result');
    resultElement.textContent = '';
    let townsElementsArr = Array.from(document.getElementsByTagName('li'));

    for (const element of townsElementsArr) {
        element.style.fontWeight = '';
        element.style.textDecoration = '';
    }
    
    let searchTermElement = document.getElementById('searchText');
    const searchTerm = searchTermElement.value;
    let townsNamesArr = townsElementsArr.map(a => a.textContent);
    let foundMatchesArr = [];
    
    for (const currWord of townsNamesArr) {
        if (currWord.includes(searchTerm)){
            foundMatchesArr.push(currWord);
        }
    }

    if (foundMatchesArr.length > 0){
        townsElementsArr.map(twe => {
            if (foundMatchesArr.includes(twe.textContent)){
                twe.style.fontWeight = 'bold';
                twe.style.textDecoration = 'underline';
            }
        });
    }
    resultElement.textContent = `${foundMatchesArr.length} matches found`;
}
