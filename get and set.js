var person = { name: "John", surname: "Doe"};
Object.defineProperty(person, 'fullName', {
 get: function () {
 return this.name + " " + this.surname;
 },
 set: function (value) {
 [this.name, this.surname] = value.split(" ");
 }
});
console.log(person.fullName); // -> "John Doe"
person.surname = "Hill";
console.log(person.fullName); // -> "John Hill"
person.fullName = "Mary Jones";
console.log(person.name) // -> "Mary"