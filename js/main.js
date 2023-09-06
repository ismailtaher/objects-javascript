// Objects

// Key-value pairs in curly braces
/* const myObj = { name: "Ismail" };

const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["eat", "sleep", "code"],
  beverage: {
    morning: "coffee",
    afternoon: "Iced Tea",
  },
  action: function () {
    return `time for ${this.beverage.morning}`; // keyword this refers to the object so we can access values inside it!
  },
};
console.log(anotherObj.action());
 */

// Another example

/* const vehicle = {
  wheels: 4,
  engine: function () {
    return "vrooom vrooom!";
  },
};

// Inheriting keys and values of a generic object

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels);
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
  return "whoooooosh!";
};
console.log(car.engine());
console.log(car.wheels);

// Creating another object from an already inherited object

const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function () {
  return "shhhhhh....";
};
console.log(tesla.engine());
 */

// Led-zeppelin

const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Bonham",
};

// Accessing Keys & Values of an object

console.log(Object.keys(band));
console.log(Object.values(band));

// Using for loop to access key-value pairs

for (let job in band) {
  console.log(`On ${job}, it's ${band[job]}`);
}

// adding values/properties to an object

band.keyboard = "Ismail";

// adding a method to an object

band.start = function () {
  return "There's a lady who's sure, all that glitters is gold and she's buying a stairway to heaven";
};

// deleting a value/property/method from an object

delete band.keyboard;

// Checking if the object has a specific value/property

console.log(band.hasOwnProperty("keyboard"));

// Destructurng objects

// extracting the value of a key-value property in a variable, from an object

const { guitar: myVariable, bass: myBass } = band;
console.log(myVariable);
console.log(myBass);

// Giving the variables the same name as key-values of the object

const { vocals, guitar, bass, drums } = band;
console.log(guitar);
console.log(vocals);

// passing a key-value inside a function

function sings({ vocals }) {
  return `${vocals} sings`;
}

console.log(sings(band));
