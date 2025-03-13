function sayHello(name: string): void {
    console.log(`Hello ${name}`);
}

sayHello('Robot_Dreams');

sayHello((5).toString());
const obj = {
    name: 'Robot_Dreams from Object'
};
sayHello(obj.name);
