// style the redp element red
const redP = document.getElementById("redP");
redP.style.color = "red"

// apend a paragraph to mydiv
const newParagraph = document.createElement("p");
newParagraph.textContent = "adding a new paragraph";
document.getElementById("myDiv").appendChild(newParagraph);