console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }
  info() {
    return console.log(
      `Name: ${this.name} Pets: ${this.pets} Residence: ${this.residence} Hobbies: ${this.hobbies}`
    );
  }
  greeting() {
    return console.log(
      `Hello! My name is ${this.name}. I have ${this.pets} pets. I live in ${this.residence} and like ${this.hobbies}.`
    );
  }
}

let person = new Person("Bob", 2, "New York", ["coding, cooking, gaming"]);
person.info();
person.greeting();

class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = "Full Stack Web Developer";
  }
  greeting() {
    return console.log(
      `Hello! My name is ${this.name}. I'm a ${this.occupation}. I have ${this.pets} pets. I live in ${this.residence} and like ${this.hobbies}.`
    );
  }
}

const kevin = new Coder("Kevin", 0, "New Jersey", ["coding, gaming"]);
kevin.info();
kevin.greeting();
