//Select all p elements 
const paragraphs = document.getElementsByTagName("p");

//Loop through the collection and change them
for (let i = 0; i < paragraphs.length; i++) {
     paragraphs[i].style.color = "green";
     paragraphs[i].style.fontFamily = "Sans-Serif";
}
//Class Names
const redElements = document.getElementsByClassName("red-text");
for (let i = 0; i < redElements.length; i++) {
    redElements[i].style.color = "red";
}

//Nested Elements
const likedFoods = document.getElementById("liked-foods");
const likedFoodsItems = likedFoods.getElementsByTagName("li");
for (let i = 0; i < likedFoodsItems.length; i++) {
    likedFoodsItems[i].style.color = "Maroon";
}