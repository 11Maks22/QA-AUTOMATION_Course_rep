class MyClass {
    _privateName;
    constructor(name){
        this._privateName = name;
        this.fullName = this._privateName + ' Din';
    }
    get name() {
        return this._privateName;
    }

    set name(name) {
        if (!name) {
            throw new Error('Name is required');
        } else{
            this._privateName = name;
        }
    }

    get fullName() {
        return this.fullName;
    }
}

const myClass = new MyClass('John');
console.log(myClass.name);
console.log(myClass.fullName);


myClass.name = 'Curt Vangner';
console.log(myClass.name);
console.log(myClass.fullName);