const people = [
	{ id: 1, name: "bob", age: 45, position: "designer" },
	{ id: 2, name: "Jaka", age: 25, position: "developer" },
	{ id: 3, name: "Sue", age: 22, position: "make-up" },
]

const person = people.find(function (person) {
	return person.id === 2
})

console.log(person)
