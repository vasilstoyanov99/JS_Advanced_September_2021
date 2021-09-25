function extractText() {

    let element = document.getElementById('items');
    let list = element.children;
    const items = Array.from(list).map(x => x.textContent).join('\n');
    document.getElementById('result').textContent = items;
}