function solve() {

    const infoEl = document.getElementById('info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    let stopData = {
        name: '',
        next: 'depot'
    };

    async function depart() {
        try {
            departBtn.disabled = true;
            const url = `http://localhost:3030/jsonstore/bus/schedule/${stopData.next}`;
            const response = await fetch(url);

            if (response.status !== 200) {
                throw new Error('Stop is not found!');
            }
            stopData = await response.json();
            infoEl.textContent = `Next stop ${stopData.name}`;
            arriveBtn.disabled = false;

        } catch (error) {
            infoEl.textContent = 'Error';
        }
    }

    function arrive() {
        arriveBtn.disabled = true;
        infoEl.textContent = `Arriving at ${stopData.name}`;
        departBtn.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();