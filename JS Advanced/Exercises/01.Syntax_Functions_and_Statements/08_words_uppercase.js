function separateAndPrintUppercaseLetters(text) {

    const regex = /(\b[^\s.]+\b)/g;
    let seperatedWords = text.match(regex);
    let uppercased = seperatedWords.map(word => word.toUpperCase());
    console.log(uppercased.join(', '));
}