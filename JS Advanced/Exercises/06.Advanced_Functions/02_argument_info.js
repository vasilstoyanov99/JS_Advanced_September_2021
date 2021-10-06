function solve(...params) {
    let occurrences = {};
    let result = [];

    params.forEach(param => {
        const type = typeof param;
        occurrences[type] = occurrences[type] ? ++occurrences[type] : occurrences[type] = 1;
        result.push(`${type}: ${param}`);
    });

    Object.keys(occurrences)
        .sort((a, b) => occurrences[b] - occurrences[a])
        .forEach(key => result.push(`${key} = ${occurrences[key]}`));

    return result.join('\n');
}