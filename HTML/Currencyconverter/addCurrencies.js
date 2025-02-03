function addCurrencies() {
    // List of currencies to display
    const currencies = ["USD - US Dollar", "EUR - Euro", "GBP - British Pound", "JPY - Japanese Yen", "AUD - Australian Dollar", "CAD - Canadian Dollar"];

    // Get the unordered list element by its ID
    const currencyList = document.getElementById("currency-list");

    // Clear any existing list items
    currencyList.innerHTML = "";

    // Loop through the currencies array and create list items
    currencies.forEach((currency) => {
        const li = document.createElement("li"); // Create a new list item element
        li.textContent = currency; // Set the text content to the currency name
        currencyList.appendChild(li); // Append the list item to the unordered list
    });
}