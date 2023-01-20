const people = [
	{ name: "bob", age: 45, position: "designer" },
	{ name: "Jaka", age: 25, position: "developer" },
	{ name: "Sue", age: 22, position: "make-up" },
]

const ages = people.map(function (person) {
	return person.age
})

console.log(ages)
