async function fetchDataAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json(); // Return raw data from API
    } catch (error) {
        console.error("Error:", error);
        return null; // Handle error appropriately
    }
}

async function processDataAsync() {
    const data = await fetchDataAsync(); // Fetch raw data
    if (!data) return; // Exit if data is null (error occurred)

    console.log("Data received:", data);
    console.log("Completed:", data.completed);
    return data.completed; // Return meaningful processed data
}

processDataAsync()
    .then(processedData => console.log("Processed data:", processedData));
