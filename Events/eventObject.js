const btn = document.querySelector(".btn")
const heading = document.querySelector("h1")

heading.addEventListener("click", function (event) {
	// console.log(event)
	console.log(event.currentTarget)
	event.currentTarget.classList.add("blue")
})

btn.addEventListener("click", function (e) {
	// console.log(e)
	console.log(e.currentTarget)
	e.currentTarget.classList.add("button")

	console.log("This keyword", this)
})
