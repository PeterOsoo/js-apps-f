const btns = document.querySelectorAll(".btn")

btns.forEach(function (btn) {
	btn.addEventListener("click", function (e) {
		e.target.style.color = "blue"
		console.log("Clicked", e)
	})
})
