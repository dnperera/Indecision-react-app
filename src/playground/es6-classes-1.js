
class Person {
  constructor(name='Anonymous',age=0){
    this.name = name;
    this.age = age;
  }
  getGreeting(){
    return `Hi.I am ${this.name}`;
  }

  getDescription(){
    return `Hi I am ${this.name} and ${this.age} old !`;
  }
}


const dnp = new Person('Dasith',4);
console.log(dnp.getDescription());

class Student extends Person {
  constructor(name,age,major){
    super(name,age);
    this.major = major;
  }

  hasMajor(){
    return !!this.major;
  }

  getDescription(){
    let message = super.getDescription();
    if(this.hasMajor){
      message += `Their major is ${this.major}.`
    }
    return message;
  }
}

const firstStd = new Student('Denith Perera',6,'Physics & Maths');
console.log(firstStd);
console.log(firstStd.hasMajor());
console.log(firstStd.getDescription());


// class Person {
//   constructor(name = 'Anonymous', age = 0) {
//     this.name = name;
//     this.age = age;
//   }
//   getGreeting() {
//     return `Hi. I am ${this.name}!`;
//   }
//   getDescription() {
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }

// class Student extends Person {
//   constructor(name, age, major) {
//     super(name, age);
//     this.major = major;
//   }
//   hasMajor() {
//     return !!this.major;
//   }
//   getDescription() {
//     let description = super.getDescription();

//     if (this.hasMajor()) {
//       description += ` Their major is ${this.major}.`;
//     }

//     return description;
//   }
// }

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` I am visiting from ${this.homeLocation}.`;
    }

    return greeting;
  }
}

const me = new Traveler('Andrew Mead', 26, 'Philadelphia');
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());
