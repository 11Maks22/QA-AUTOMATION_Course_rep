let counter = 0;
let lock = false;

async function incrementCounter() {
    // Wait for the lock to be free
    while (lock) {
        console.log('lock is busy');
        await new Promise(resolve => setTimeout(resolve, 10)); // Yield control briefly
    }

    // Acquire the lock
    lock = true;
    await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
    await new Promise(resolve => setTimeout(resolve, Math.random() * 500));
    counter = counter + 1;
    console.log(`Incremented counter: ${counter}`);

    lock = false;

    return counter;
}

async function simulateRaceCondition() {
    console.log('Initial counter:', counter);
    const task1 = incrementCounter();
    const task2 = incrementCounter();
    const task3 = incrementCounter();
    const task4 = incrementCounter();
    await Promise.all([task1, task2, task3, task4]);
    console.log('Final counter value:', counter);
}

simulateRaceCondition();
