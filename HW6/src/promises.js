function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Data received:", data);
            console.log("Title:", data.title);
            return data.title; // Return processed data
        })
        .catch(error => {
            console.error("Error:", error);
            return null; // Handle errors gracefully
        });
}

// Call fetchData and use the returned value
fetchData().then(processedData => {
    if (processedData !== null) {
        console.log("Final processed data:", processedData);
    } else {
        console.log("Failed to fetch or process data.");
    }
});
