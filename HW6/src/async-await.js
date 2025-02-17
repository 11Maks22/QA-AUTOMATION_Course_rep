async function fetchDataAsync() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return processDataAsync(data);
    } catch (error) {
      console.error("Error:", error);
      return null; //Or handle the error appropriately
    }
  }
  
  async function processDataAsync(data) {
    console.log("Data received:", data);
    //Use the data here
    console.log("Completed:", data.completed);
    return data.completed; //Return something meaningful
  
  }
  
  
  fetchDataAsync()
    .then(processedData => console.log("Processed data:", processedData));
  
  