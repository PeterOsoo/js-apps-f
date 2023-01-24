const btn = document.querySelector(".btn")
const heading = document.querySelector("h1")

btn.addEventListener("click", function () {
	console.log("Clicked me")
})

btn.addEventListener("mousedown", function () {
	console.log("Down")
})

btn.addEventListener("mouseup", function () {
	console.log("Up")
})
