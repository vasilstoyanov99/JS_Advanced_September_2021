function getSlicedPieFlavours(flavoursArr, startFlavour, endFlavour) {

    let startIndex = flavoursArr.indexOf(startFlavour);
    let endIndex = flavoursArr.indexOf(endFlavour);

    return flavoursArr.slice(startIndex, endIndex + 1);
}