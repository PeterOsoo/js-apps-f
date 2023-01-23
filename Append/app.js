const result = document.querySelector(".result")

const bodyDiv = document.createElement("div")

const text = document.createTextNode("This text comes from my Js file")
bodyDiv.appendChild(text)
result.appendChild(bodyDiv)

const heading = document.createElement("h2")

const headingText = document.createTextNode(
	"This text comes from my Js file for heading"
)
heading.appendChild(headingText)
heading.classList.add("blue")
result.appendChild(heading)

const paragraph = document.createElement("h3")
paragraph.innerText = "New Paragraph"
result.appendChild(paragraph)
