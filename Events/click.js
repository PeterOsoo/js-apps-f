const btn = document.querySelector(".btn")
const heading = document.querySelector("h1")

btn.addEventListener("click", function () {
	// console.log("Button clicked")
	heading.classList.add("click")
})
