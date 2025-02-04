document.addEventListener("DOMContentLoaded", function() {
    // Select all p elements
    const paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = "green";
        paragraphs[i].style.fontFamily = "Sans-Serif";
    }

    // Change elements with class "red-text" to red
    const redElements = document.getElementsByClassName("red-text");
    for (let i = 0; i < redElements.length; i++) {
        redElements[i].style.color = "red";
    }

    // Change liked foods to maroon
    const likedFoods = document.getElementById("liked-foods");
    const likedFoodsItems = likedFoods.getElementsByTagName("li");
    for (let i = 0; i < likedFoodsItems.length; i++) {
        likedFoodsItems[i].style.color = "Maroon";
    }

    // Button to change h1 to blue
    function handleClick() {
        const mainHeaders = document.getElementsByTagName("h1");
        for (let i = 0; i < mainHeaders.length; i++) {
            mainHeaders[i].style.color = "blue";
        }
    }

    const changeColourButton = document.getElementById("change-colour-button");
    changeColourButton.addEventListener("click", handleClick);

    // Timer Function to Show Fruits One by One
    const fruits = document.getElementById("liked-fruits");
    const items = fruits.getElementsByTagName("li");
    let index = items.length - 1;

    // Initially hide all list items
    for (let i = 0; i < items.length; i++) {
        items[i].style.visibility = "hidden";
    }

    function showNextItem() {
        if (index >= 0) {
            items[index].style.visibility = "visible";
            index--; // Decrease index correctly - countdown
            setTimeout(showNextItem, 2000); // Wait 2 seconds before showing the next item
        }
    }

    const timerButton = document.getElementById("timer-button");
    timerButton.addEventListener("click", showNextItem); // Start timer when button is clicked
});