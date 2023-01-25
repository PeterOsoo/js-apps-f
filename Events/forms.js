const form = document.getElementById("form")
const fname = document.getElementById("name")
const password = document.getElementById("password")

form.addEventListener("submit", function (e) {
	console.log("form Submitted")
	e.preventDefault()
	console.log(fname.value)
	console.log(password.value)
})
