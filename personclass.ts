class Person {
  protected age: number;
  private _name: string;
  constructor (name: string, age: number) {
    this.age = age;
    this._name = name;
  }

  get name(): string {
    return this._name.toUpperCase();
  }

  set name(name: string) {
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