async function fetchRealTimeData() {
    try {
        const response = await fetch('https://api.agrisense.com/real-time-data');
        return await response.json();
    } catch (error) {
        console.error("Error fetching real-time data:", error);
    }
}

async function fetchHistoricalData(startDate, endDate) {
    try {
        const response = await fetch(`https://api.agrisense.com/historical-data?start=${startDate}&end=${endDate}`);
        return await response.json();
    } catch (error) {
        console.error("Error fetching historical data:", error);
    }
}
