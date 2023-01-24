// call back function
function morning(name) {
	// console.log("Good Morning Bob")
	return ` Good Morning ${name}, `
}
function afternoon(name) {
	// console.log("Good Morning Bob")
	return ` Good Afternoon ${name}, `
}

function greet(name, cb) {
	cb()
	const myName = "Rateng"
	console.log(`${cb(name)} my name is ${myName}  `)
}

greet("Bobs", morning)
greet("Petro", afternoon)
