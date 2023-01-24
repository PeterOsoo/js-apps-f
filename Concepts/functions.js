// Functions - declare, invoke

const multiply = (num1, num2) => num1 * num2

const value = multiply(4, 5)
console.log(value)

// return
function calculate(value) {
	return value * 2.54
}

const height = calculate(200)
console.log(height)

const mike = "Mike"
function hello(fname = "Jaka") {
	console.log("Morning, how are you", fname + "?")
}

// greet Mike
hello(mike)

// greet Jack
hello("Jack")

// greet Rateng
hello("Rateng")

hello()

function greetings() {
	console.log("Hello Mine")
	console.log("Hello Universe")
	console.log("Hello World")
	console.log("...")
}

greetings()
greetings()
greetings()

// Arrays

const friends = ["Anna", "Nita", "Bali", " Sue"]
console.log(friends)
console.log(friends[1])

let bestFriend = friends[2]
console.log(bestFriend)
// const cones = 10
// const games = 3
// const amount = cones % games
// console.log(amount)

// console.log(typeof null)
