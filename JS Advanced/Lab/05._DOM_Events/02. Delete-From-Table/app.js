function deleteByEmail() {
    const searchTerm = document.querySelector('input[name="email"]').value;
    const elements = Array.from(document.querySelectorAll('td'))
        .filter(a => {
            return a.textContent === searchTerm;
        });

    let isElementRemoved = false;
    for (const element of elements) {
        element.parentElement.remove();
        isElementRemoved = true;
    }

    const message = isElementRemoved ? 'Deleted.' : 'Not found.';;
    document.getElementById('result').textContent = message;
}