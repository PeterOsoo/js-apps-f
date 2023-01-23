// document.body.style.backgroundColor = "blue"

// console.log("DOM")

const h3 = document.getElementById("h3")
h3.style.color = "blue"

const headings = document.getElementsByTagName("h3")
// console.log(headings)

headings[1].style.color = "green"

const listItems = document.getElementsByClassName("special")
// console.log(listItems)

listItems[2].style.color = "gray"

// querySelector
const result = document.querySelector("#result")
// console.log(result)
result.style.color = "orange"

const item = document.querySelector(".special")
// console.log(item)

const list = document.querySelectorAll(".normal")
// console.log(list)

list.forEach(function (item) {
	item.style.color = "blue"
	// console.log(item)
})

const last = document.querySelector(".last-last")
const secondLast = last.previousSibling.previousSibling
console.log(secondLast)
