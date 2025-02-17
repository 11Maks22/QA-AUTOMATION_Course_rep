function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => processData(data));
  }
  
  function processData(data) {
    console.log("Data received:", data);
    //Use the data here: example using the title
    console.log("Title:", data.title);
    return data.title; //Return something meaningful
  }
  
  
  fetchData()
    .then(processedData => console.log("Processed data:", processedData))
    .catch(error => console.error("Error:", error));
  
  