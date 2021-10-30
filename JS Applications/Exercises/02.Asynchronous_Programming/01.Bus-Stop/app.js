async function getInfo() {
    const stopIdInput = document.getElementById('stopId');
    const stopNameElement = document.getElementById('stopName');
    const timetableElement = document.getElementById('buses');
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopIdInput.value}`;

    try {
        /*stopNameElement.textContent = 'Loading...';*/ //Use it in case of enabled request throttling
        timetableElement.textContent = '';
        const response = await fetch(url);

        if (response.status !== 200) {
            throw new Error('Stop ID not found!');
        }

        const data = await response.json();
        stopNameElement.textContent = data.name;
        Object.entries(data.buses).forEach(b => {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;
            timetableElement.appendChild(liElement);
        })
    } catch (error) {
        stopNameElement.textContent = 'Error';
    }
}