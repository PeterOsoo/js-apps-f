const person = {
	name: "Jaka",
	lastName: " Black",
	age: 25,
	education: false,
	married: true,
	siblings: ["Dok", "Wendy", "Peters"],
	// greeting: function () {
	greeting() {
		console.log("Hello, my name is Jaka")
	},
}

console.log(person.greeting())
console.log(person.siblings[2])
console.log(person.age)
