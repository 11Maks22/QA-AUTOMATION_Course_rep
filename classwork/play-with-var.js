function playWithVars(){
    const a = 1;
    // eslint-disable-next-line no-undef
    b = 2;
    // eslint-disable-next-line prefer-const
    let c = 'test string';

    // eslint-disable-next-line no-unused-vars
    const d = 4;
    e = a + b

    console.log(a, b, c, e);

    const booleanVar = true;
    const underfinedVar = undefined;

    console.log(booleanVar, underfinedVar);

    const obj = {
        key: 'value',
        key2: 'value2'
    };
    console.log(obj);

    return obj;
}

playWithVars();
