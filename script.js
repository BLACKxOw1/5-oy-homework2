
// // //                                                         No1

// class Rectangle {

//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   getWidth() {
//     return this.width;
//   }

//   getHeight() {
//     return this.height;
//   }

//   setSides(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   get perimeter() {
//     return 2 * (this.width + this.height);
//   }

//   get area() {
//     return this.width * this.height;
//   }
// }

// const result = new Rectangle(5, 10);

// console.log("Width:", result.getWidth());
// console.log("Height:", result.getHeight());
// console.log("Perimeter:", result.perimeter);
// console.log("Area:", result.area);

// result.setSides(7, 3);
// console.log("Updated Perimeter:", result.perimeter);
// console.log("Updated Area:", result.area);



// // //                                                         No2

// class Triangle {

//   #leftSide;
//   #rightSide;
//   #width;

//   constructor(a = 0, b = 0, c = 0) {
//     this.setSides(a, b, c);
//   }

//   getLeftSide() {
//     return this.#leftSide;
//   }

//   getRightSide() {
//     return this.#rightSide;
//   }

//   getwidth() {
//     return this.#width;
//   }

//   setSides(a, b, c) {
//     this.leftSide = a;
//     this.rightSide = b;
//     this.width = c;
//   }

//   getUpdatedLeftSide() {
//     return this.leftSide;
//   }

//   getUpdatedRightSide() {
//     return this.rightSide;
//   }

//   getUpdatedwidth() {
//     return this.width;
//   }
// }

// const result = new Triangle(3, 4, 5);

// console.log("Leftside:", result.leftSide);
// console.log("Rightside:", result.rightSide);
// console.log("Width:", result.width);

// result.setSides(6, 7, 8);
// console.log("Updated LeftSide:", result.leftSide);
// console.log("Updated Rightside:", result.rightSide);
// console.log("Updated Width:", result.width);



// // //                                                         No3

// class Employee {

//   #id;
//   #firstName;
//   #lastName;
//   #salary;

//   constructor(id = 0, firstName = "", lastName = "", salary = 0) {
//     this.#id = id;
//     this.#firstName = firstName;
//     this.#lastName = lastName;
//     this.#salary = salary;
//   }

//   getId() {
//     return this.#id;
//   }

//   getFirstName() {
//     return this.#firstName;
//   }

//   getLastName() {
//     return this.#lastName;
//   }

//   getSalary() {
//     return this.#salary;
//   }

//   setId(id) {
//     this.#id = id;
//   }

//   setFirstName(fName) {
//     this.#firstName = fName;
//   }

//   setLastName(lName) {
//     this.#lastName = lName;
//   }

//   setSalary(s) {
//     this.#salary = s;
//   }

//   getFullName() {
//     return `${this.#firstName} ${this.#lastName}`;
//   }

//   getAnnualSalary() {
//     return this.#salary * 12;
//   }

//   raiseSalary(percent) {
//     this.#salary += (this.#salary * percent) / 100;
//     return this.#salary;
//   }
// }

// const result = new Employee(8273, "Eshmat", "Toshmatov", 15000);

// console.log("Id:",result.getId());
// console.log("To'liq ism:",result.getFullName());
// console.log("Oylik:",result.getSalary());
// console.log("Yillik Daromad:",result.getAnnualSalary());

// result.raiseSalary(10);
// console.log("KO'tarilgan oylik:",result.getSalary());

// const result2 = new Employee(2937, "Toshmat", "Eshmatov", 9000);

// console.log("Id:",result2.getId());
// console.log("Yangi to'liq ism:",result2.getFullName());
// console.log("Yangi oylik:",result2.getSalary());

// console.log("Yangi yillik daromad:",result2.getAnnualSalary());

// result2.raiseSalary(10);
// console.log("Yangi oshirilgan daromad:",result2.getSalary());



// // //                                                         No4

// class Time {

//   #hour
//   #minute
//   #second


//   constructor(h, min, sec) {
//     this.#hour = h;
//     this.#minute = min;
//     this.#second = sec;
//   }

//   getHour() {
//     return this.#hour
//   }
//   getMinute() {
//     return this.#minute
//   }
//   getSecond() {
//     return this.#second
//   }
//   setHour(h) {
//     if (h >= 0 && h < 24) this.#hour = h;
//   }

//   setMinute(m) {
//     if (m >= 0 && m < 60) this.#minute = m;
//   }

//   setSecond(s) {
//     if (s >= 0 && s < 60) this.#second = s;
//   }

//   nextSecond() {
//     this.#second++;
//     if (this.#second >= 60) {
//       this.#second = 0;
//       this.#minute++;
//       if (this.#minute >= 60) {
//         this.#minute = 0;
//         this.#hour++;
//         if (this.#hour >= 24) {
//           this.#hour = 0;
//         }
//       }
//     }
//     return this.toString();
//   }

//   previousSecond() {
//     this.#second--;
//     if (this.#second < 0) {
//       this.#second = 59;
//       this.#minute--;
//       if (this.#minute < 0) {
//         this.#minute = 59;
//         this.#hour--;
//         if (this.#hour < 0) {
//           this.#hour = 23;
//         }
//       }
//     }
//     return this.toString();
//   }

//   toString() {
//     const hh = String(this.#hour).padStart(2, "0");
//     const mm = String(this.#minute).padStart(2, "0");
//     const ss = String(this.#second).padStart(2, "0");
//     return `${hh}:${mm}:${ss}`;
//   }

// }

// const result = new Time(6, 20, 10);

// console.log(result.toString());
// console.log(result.previousSecond());
// console.log(result.nextSecond());



// // //                                                         No5

// class Shape {
//   #color;
//   #filled;

//   constructor(color, filled) {
//     this.#color = color;
//     this.#filled = filled;
//   }

//   getColor() {
//     return this.#color;
//   }

//   setColor(c) {
//     this.#color = c;
//   }

//   isFilled() {
//     return this.#filled;
//   }

//   setFilled(f) {
//     this.#filled = f;
//   }

//   toString() {
//     return `Shape [ color = ${this.#color}, filled = ${this.#filled} ] `;
//   }
// }

// class Circle extends Shape {
//   #radius;

//   constructor(radius, color, filled) {
//     super(color, filled);
//     this.#radius = radius;
//   }

//   getRadius() {
//     return this.#radius;
//   }

//   setRadius(r) {
//     if (r > 0) this.#radius = r;
//   }

//   getArea() {
//     return Math.PI * this.#radius * this.#radius;
//   }

//   getPerimeter() {
//     return 2 * Math.PI * this.#radius;
//   }

//   toString() {
//     return `Circle [ radius = ${this.#radius}, color = ${this.getColor()}, filled = ${this.isFilled()} ]`;
//   }
// }

// class Rectangle extends Shape {
//   #width;
//   #height;

//   constructor(width, height, color, filled) {
//     super(color, filled);
//     this.#width = width;
//     this.#height = height;
//   }

//   getWidth() {
//     return this.#width;
//   }

//   setWidth(w) {
//     if (w > 0) this.#width = w;
//   }

//   getHeight() {
//     return this.#height;
//   }

//   setHeight(h) {
//     if (h > 0) this.#height = h;
//   }

//   getArea() {
//     return this.#width * this.#height;
//   }

//   getPerimeter() {
//     return 2 * (this.#width + this.#height);
//   }

//   toString() {
//     return `Rectangle [ width = ${this.#width}, height = ${this.#height}, color = ${this.getColor()}, filled = ${this.isFilled()} ]`;
//   }
// }

// const firstElement = new Circle(7, "blue", true);

// console.log(firstElement.toString());
// console.log("Yuza:", firstElement.getArea());
// console.log("Perimeter:", firstElement.getPerimeter());

// const lastElement = new Rectangle(4, 6, "green", false);
// console.log(lastElement.toString());
// console.log("Yuza:", lastElement.getArea());
// console.log("Perimeter:", lastElement.getPerimeter());



// // //                                                         No6

// class Person {
//   #name;
//   #address;

//   constructor(name, address) {
//     this.#name = name;
//     this.#address = address;
//   }

//   getName() {
//     return this.#name;
//   }

//   setName(n) {
//     this.#name = n;
//   }

//   getAddress() {
//     return this.#address;
//   }

//   setAddress(a) {
//     this.#address = a;
//   }

//   toString() {
//     return `Person [ name = ${this.#name}, address = ${this.#address} ]`;
//   }
// }



// class Student extends Person {
//   #faculty;
//   #year;
//   #university;

//   constructor(name, address, faculty, year, university) {
//     super(name, address);
//     this.#faculty = faculty;
//     this.#year = year;
//     this.#university = university;
//   }

//   getFaculty() {
//     return this.#faculty
//   }
//   getYear() {
//     return this.#year
//   }
//   getUniversity() {
//     return this.#university
//   }
//   setFaculty(sfaculty) {
//     this.#faculty = sfaculty
//   }
//   setYear(syear) {
//     this.#year = syear
//   }
//   setUniversity(suniversity) {
//     this.#university = suniversity
//   }


//   toString() {
//     return `Student [ name = ${this.getName()}, address = ${this.getAddress()}, faculty = ${this.#faculty}, year = ${this.#year}, university = ${this.#university} ]`;
//   }
// }

// class Employee extends Person {
//   #salary;
//   #work;

//   constructor(name, address, salary, work) {
//     super(name, address);
//     this.#salary = salary;
//     this.#work = work;
//   }

//   getSalary() {
//     return this.#salary
//   }
//   getWork() {
//     return this.#work
//   }
//   setSalary(s) {
//     this.#salary = s
//   }
//   setWork(w) {
//     return this.#work = w
//   }

//   toString() {
//     return `Student [ name = ${this.getName()}, work = ${this.getWork()}, salary = ${this.getSalary()} ]`;
//   }
// }

// const student = new Student("YAshnarbek", "Toshkent", "IT", 2, "TATU");
// console.log(student.toString());

// const employee = new Employee("Muhammadsolih", "Samarqand", 5000, "Engineer");
// console.log(employee.toString());



// // //                                                         No7

// class Animal {
//   #name;
//   #speed;
//   #weight;

//   constructor(name, speed, weight) {
//     this.#name = name;
//     this.#speed = speed;
//     this.#weight = weight;
//   }

//   getName() {
//     return this.#name;
//   }

//   setName(n) {
//     this.#name = n;
//   }

//   getSpeed() {
//     return this.#speed;
//   }

//   setSpeed(s) {
//     this.#speed = s;
//   }

//   getWeight() {
//     return this.#weight;
//   }

//   setWeight(w) {
//     this.#weight = w;
//   }

//   toString() {
//     return `Animal [ name = ${this.#name}, speed = ${this.#speed}, weight = ${this.#weight} ]`;
//   }
// }



// class Mammal extends Animal {
//   #legs;

//   constructor(name, speed, weight, legs) {
//     super(name, speed, weight);
//     this.#legs = legs;
//   }

//   getLegs() {
//     return this.#legs
//   }
//   setLegs(l) {
//     this.#legs = l
//   }

//   toString() {
//     return `Mammal [ name = ${this.getName()}, legs = ${this.#legs}, speed = ${this.getSpeed()}, weight = ${this.getWeight()} ]`;
//   }
// }

// class Cat extends Mammal {
//   constructor(name, speed, weight, legs) {
//     super(name, speed, weight, legs);
//   }

//   getSound() {
//     return "Meow";
//   }

//   toString() {
//     return `Cat [ name = ${this.getName()}, speed = ${this.getSpeed()}, weight = ${this.getWeight()}, legs = ${this.getLegs()}, sound = ${this.getSound()} ]`;
//   }
// }

// class Dog extends Mammal {
//   constructor(name, speed, weight, legs) {
//     super(name, speed, weight, legs);
//   }

//   getSound() {
//     return "Woof";
//   }

//   toString() {
//     return `Dog [ name = ${this.getName()}, speed = ${this.getSpeed()}, weight = ${this.getWeight()} legs = ${this.getLegs()}, sound = ${this.getSound()} ]`;
//   }
// }

// class Fish extends Animal {
//   #size
//   constructor(name, speed, weight, size) {
//     super(name, speed, weight);
//     this.#size = size;
//   }

//   getSize() {
//     return this.#size;
//   }
//   setSize(s) {
//     this.#size = s
//   }

//   toString() {
//     return `Fish [ name = ${this.getName()}, size = ${this.#size} ]`;
//   }
// }

// class Whale extends Fish {
//   #size
//   constructor(name, speed, weight, size) {
//     super(name, speed, weight, size);
//   }

//   getSound() {
//     return "Poof";
//   }

//   toString() {
//     return `Whale [ name = ${this.getName()}, speed = ${this.getSpeed()}, weight = ${this.getWeight()}, size = ${this.getSize()}, sound = ${this.getSound()} ]`;
//   }
// }

// class Shark extends Fish {
//   #size
//   constructor(name, speed, weight, size) {
//     super(name, speed, weight, size);
//   }

//   getSound() {
//     return "Sheef";
//   }

//   toString() {
//     return `Shark [ name = ${this.getName()}, speed = ${this.getSpeed()}, weight = ${this.getWeight()}, size = ${this.getSize()}, sound = ${this.getSound()} ]`;
//   }
// }

// const cat = new Cat("Mittens", 15, 5, 4);
// console.log(cat.toString());

// const dog = new Dog("Rex", 20, 10, 4);
// console.log(dog.toString());

// const whale = new Whale("Blue Whale", 40, 30000, 30);
// console.log(whale.toString());

// const shark = new Shark("White shark", 50, 2000, 6);
// console.log(shark.toString());



// // //                                                         No8

// class Object01 {
//   static customKeys(obj) {
//     let result1 = [];
//     for (let key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         result1.push(key);
//       }
//     }
//     return result1;
//   }

//   static customValues(obj) {
//     let result2 = [];
//     for (let key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         result2.push(obj[key]);
//       }
//     }
//     return result2;
//   }

//   static customEntries(obj) {
//     let result3 = [];
//     for (let key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         result3.push([key, obj[key]]);
//       }
//     }
//     return result3;
//   }
// }

// class Number01 {
//   static customIsInteger(n) {
//     return typeof n === "number" && isFinite(n) && Math.floor(n) === n;
//   }
// }

// class Array01 {
//   static customIsArray(arr) {
//     return arr instanceof Array;
//   }
// }

// const obj = { a: 1, b: 2, c: 3 };
// console.log(Object01.customKeys(obj));
// console.log(Object01.customValues(obj));
// console.log(Object01.customEntries(obj));

// console.log(Number01.customIsInteger(10));
// console.log(Number01.customIsInteger(10.5));

// console.log(Array01.customIsArray([1, 2, 3]));
// console.log(Array01.customIsArray("hello"));



// // //                                                         No9

// class Array02 {
//   static isNumberArray(arr) {
//     if (!(arr instanceof Array)) {
//       throw new Error("Argument is not an array");
//     }
//     for (let n of arr) {
//       if (typeof n !== "number" || !Number.isFinite(n)) {
//         throw new Error("Array must contain only finite numbers");
//       }
//     }
//     return true;
//   }

//   static sum(arr) {
//     this.isNumberArray(arr);
//     return arr.reduce((acc, val) => acc + val, 0);
//   }

//   static max(arr) {
//     this.isNumberArray(arr);
//     return Math.max(...arr);
//   }

//   static min(arr) {
//     this.isNumberArray(arr);
//     return Math.min(...arr);
//   }
// }

// const nums = [3, 7, 1, 9, 4];
// console.log("Array:", nums);
// console.log("Sum:", Array02.sum(nums));
// console.log("Max:", Array02.max(nums));
// console.log("Min:", Array02.min(nums));

// try {
//   Array02.sum([1, 'a', 3]);
// } catch (m) {
//   console.error(m.message);
// }



// // //                                                         No10

// class Person {
//   constructor(housePrice, housesNumber, carPrice, carsNumber, bankAccount) {
//     this.housePrice = housePrice;
//     this.housesNumber = housesNumber;
//     this.carPrice = carPrice;
//     this.carsNumber = carsNumber;
//     this.bankAccount = bankAccount;
//   }

//   getWealth() {
//     return (this.housePrice * this.housesNumber) + (this.carPrice * this.carsNumber) + this.bankAccount;
//   }

//   toString() {
//     return `Person [Wealth = ${this.getWealth()}]`;
//   }
// }

// class RichPerson extends Person {
//   constructor(housePrice, housesNumber, carPrice, carsNumber, bankAccount, companyPrice, companiesNumber, investigation) {
//     super(housePrice, housesNumber, carPrice, carsNumber, bankAccount);
//     this.companyPrice = companyPrice;
//     this.companiesNumber = companiesNumber;
//     this.investigation = investigation;
//   }

//   getWealth() {
//     const inheritedWealth = super.getWealth();
//     return inheritedWealth + (this.companyPrice * this.companiesNumber) + this.investigation;
//   }

//   toString() {
//     return `RichPerson [Wealth = ${this.getWealth()}]`;
//   }
// }

// const person1 = new Person(50000, 1, 20000, 1, 10000);
// console.log(person1.toString());

// const person2 = new RichPerson(100000, 2, 50000, 3, 200000, 1000000, 2, 500000);
// console.log(person2.toString());