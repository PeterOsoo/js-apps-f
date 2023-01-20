const people = [
	{ name: "bob", age: 45, position: "designer" },
	{ name: "Jaka", age: 25, position: "developer" },
	{ name: "Sue", age: 22, position: "make-up" },
]

const youngPeople = people.filter(function (person) {
	return person.age <= 26
})

console.log(youngPeople)
