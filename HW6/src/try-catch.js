async function fetchDataWithFallback() {
    try {
      const response = await fetch('https://this-does-not-exist.com/api/data'); //Non existent URL
      if (!response.ok) {
         console.log("Failed on non-existent URL, trying fallback");
         //If first fetch failed, try the backup URL
         const response2 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
         if (!response2.ok) {
           throw new CustomError("Both URLs failed!");
         }
         return response2.json();
      }
      return response.json();
    } catch (error) {
      console.error("Error:", error);
      return null; //Or handle the error as needed
    }
  }
  
  
  class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = 'CustomError';
    }
  }
  
  
  fetchDataWithFallback()
    .then(data => console.log("Data:", data))
    .catch(error => console.error("Final Error:", error));
  
  