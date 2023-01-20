// Powerful Array Methods

// foreach
// does not return array

const people = [
	{ name: "bob", age: 45, position: "designer" },
	{ name: "Jaka", age: 25, position: "developer" },
	{ name: "Sue", age: 22, position: "make-up" },
]

function showPerson(person) {
	console.log(person)
	// console.log(person.position.toUpperCase())
}

// people.forEach(showPerson)

people.forEach(function (item) {
	console.log(item)
})
