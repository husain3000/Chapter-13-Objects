// const existing = { a: 1, b: 2, c: 3 };
// const clone = Object.assign({}, existing);
// console.log(clone);

var existing = { a: 1, b: 2, c: 3 };
var clone = {};
for (var prop in existing) {
 if (existing.hasOwnProperty(prop)) {
 clone[prop] = existing[prop];
 }
}
console.log(clone);