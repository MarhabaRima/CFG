function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const resultText = document.getElementById("result");
   
    if (userAnswer === "paris") {
        resultText.textContent = "Correct!";
        resultText.style.color = "green";  // Change text color to green
        resultText.style.fontWeight = 800;
    } else {
        resultText.textContent = "Incorrect. Try again!";
        resultText.style.color = "red";  // Change text color to red
        
    }
  }