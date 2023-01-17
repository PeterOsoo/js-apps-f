const fnames = ["anna", "jaka", "budas", "black", "Bruto"]

const lastName = "Ondiek"
let newArray = []

for (let i = 0; i < fnames.length; i++) {
	console.log(i)
	console.log(fnames[i])
	// newArray.push(fnames[i])

	const fullName = `${fnames[i]} ${lastName}  `
	newArray.push(fullName)
}

console.log(fnames)
console.log(newArray)
