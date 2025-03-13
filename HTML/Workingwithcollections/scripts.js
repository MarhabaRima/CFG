//Select all p elements 
let paragraphs = document.getElementsByTagName("p");

//Loop through the collection and change them
for (let i = 0; i < paragraphs.length; i++) {
     paragraphs[i].style.color = "green";
     paragraphs[i].style.fontFamily = "Sans-serif";
}

let redElements = document.getElementsByClassName("red-text");
for (let i = 0; i < redElements.length; i++) {
    redElements[i].style.color = "red";
}