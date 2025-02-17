console.log('before start');

function synchronousFunction() {
  console.log('synchronous function start');
  for (let i = 0; i < 50000; i++) {
    let sum = 0;
    // Simulate a time-consuming task
    for (let j = 0; j < 50000; j++) {
      sum += j;
    }
  }
  console.log('synchronous function end');
}

synchronousFunction();

// const promise = new Promise(resolve => {
//   synchronousFunction();
//   resolve();
// });
// promise.then(() => {
//   console.log('promise completed');
// });

console.log('after start');