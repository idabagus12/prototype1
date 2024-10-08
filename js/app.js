window.onload = function() {
    fetchData();
};

async function fetchData() {
    try {
        const response = await fetch('../data/sample-data.json'); // Replace with actual API
        const data = await response.json();
        document.getElementById('soil-moisture').innerText = data.soilMoisture;
        document.getElementById('soil-temperature').innerText = data.soilTemperature;
        document.getElementById('soil-ph').innerText = data.soilPH;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
