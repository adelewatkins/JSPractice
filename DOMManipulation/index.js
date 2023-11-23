
// add a heading. 
// Const newHeading is assigning a variable to it
const newHeading = document.createElement("h1");

// appendchild adds it to the page
document.body.appendChild(newHeading);

newHeading.textContent = "First Heading";

newHeading.style.color = "pink";


// const newpargrah is assigning it to a variable
const newParagraph = document.createElement("p");

newParagraph.textContent = "adding a new paragraph";

// appendchild adds it to the page
document.body.appendChild(newParagraph);


// add 10 pragraphs with different text
pNames = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"]
for (let i = 0; i < pNames.length; i++) {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = pNames[i];
    document.body.appendChild(newParagraph);
    newParagraph.style.color = "orange";
}


// function to add an element with text 
function AddElement(tag, text) {
    // function is telling the doc to create a new 
    // element of the type (tag)
    const newElement = document.createElement(tag);
    // function is telling what text content to have
    newElement.textContent = (text);
    // appendchild adds it to the page
    document.body.appendChild(newElement);
}