const result = document.querySelector(".result")

const bodyDiv = document.createElement("div")

const text = document.createTextNode("This text comes from my Js file")
bodyDiv.appendChild(text)
result.appendChild(bodyDiv)
