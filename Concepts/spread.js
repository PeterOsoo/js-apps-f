let person = { name: "bob" }
let person2 = { ...person }

person2.name = "Sue"

console.log(`Name of first is ${person.name} `)
console.log(`Name of Second is ${person2.name} `)
