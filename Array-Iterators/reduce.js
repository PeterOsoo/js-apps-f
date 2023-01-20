const people = [
	{ id: 1, name: "bob", age: 45, position: "designer", salary: 200 },
	{ id: 2, name: "Jaka", age: 25, position: "developer", salary: 400 },
	{ id: 3, name: "Sue", age: 22, position: "make-up", salary: 120 },
	{ id: 3, name: "Betty", age: 27, position: "boss", salary: 620 },
]

const total = people.reduce(function (acc, currentItem) {
	console.log(`total ${acc} `)
	console.log(`current money: ${currentItem.salary} `)
	acc += currentItem.salary
	return acc
}, 0)

console.log(total)
