const btn = document.querySelector(".btn")
const heading = document.querySelector("h1")
// console.log(heading)

function changeColors() {
	// console.log("Hello")
	let hasClass = heading.classList.contains("red")
	// console.log(hasClass)

	if (hasClass) {
		heading.classList.remove("red")
	} else {
		heading.classList.add("red")
	}
}
btn.addEventListener("click", changeColors)
