function solve() {
    let banner = document.querySelector('#info span');
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');

    let stop = {
        next: 'depot'
    }
    async function depart() {
        const url = 'http://localhost:3030/jsonstore/bus/schedule/' + stop.next;
        const response = await fetch(url);
        const data = await response.json();
        banner.textContent = `Next stop ${data.name}`;
        stop = data;
        departBtn.disabled = true;
        arriveBtn.disabled = false;
    }

    function arrive() {
        banner.textContent = `Arriving at ${stop.name}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();