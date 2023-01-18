const gas = [45, 67, 80]
const food = [30, 30, 40]

calculateTotal = arr => {
	let total = 0
	for (let i = 0; i < arr.length; i++) {
		total += arr[i]
	}
	return total
}

const gasTotal = calculateTotal(gas)
const foodTotal = calculateTotal(food)

console.log(gasTotal)
console.log(foodTotal)

console.log({
	gas: gasTotal,
	food: foodTotal,
})
