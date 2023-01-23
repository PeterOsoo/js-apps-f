// document.body.style.backgroundColor = "blue"

// console.log("DOM")

const h3 = document.getElementById("h3")
h3.style.color = "blue"

const headings = document.getElementsByTagName("h3")
console.log(headings)

headings[1].style.color = "green"

const listItems = document.getElementsByClassName("special")
console.log(listItems)

listItems[2].style.color = "gray"

// querySelector
const result = document.querySelector("#result")
console.log(result)
result.style.color = "orange"

const item = document.querySelector(".special")
console.log(item)
