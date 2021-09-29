function attachGradientEvents() {
    const result = document.getElementById('result');
    document.getElementById('gradient')
        .addEventListener('mousemove', onMove);

    function onMove(ev) {
        const box = ev.target;
        const percentage = Math.floor(ev.offsetX / box.clientWidth * 100);
        result.textContent = `${percentage}%`;
    }
}