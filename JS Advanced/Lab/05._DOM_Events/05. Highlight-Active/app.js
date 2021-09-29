function focused() {
    Array.from(document.getElementsByTagName('input'))
        .forEach(e => {
           e.addEventListener
           ('focus', (ev) => ev.target.parentElement.classList.add('focused'));
           e.addEventListener
           ('blur', (ev) => ev.target.parentElement.classList.remove('focused'));
        });
}