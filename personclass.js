class Person {
    constructor(name, age) {
        this.age = age;
        this._name = name;
    }
    get name() {
        return this._name.toUpperCase();
    }
    set name(name) {
        this._name = name;
    }
    getAge() {
        return this.age;
    }
    sayHi() {
        console.log(`${this._name} says Hi!`);
    }
}
let Sean = new Person(`Sean`, 5);
Sean.sayHi();
console.log(Sean.getAge());
Sean.name = "jimmy";
console.log(Sean.name);
