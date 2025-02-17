fetch('https://catfact.ninja/docs/api-docs.json')
  .then(response => {
    //console.log('response:', response);
    return response.json();
  })
  .then(e => console.log('body:', e))
  .catch(e => console.log('error:', e))
  .finally(() => console.log('finally'));

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  console.log('response',response)
 
  const json = await response.json();
  console.log('body:', json);
  return json;
  }
  
  async function handleData() {
    const data = await getData();
    console.log('Data:', data);
  }
  
  handleData();
  
