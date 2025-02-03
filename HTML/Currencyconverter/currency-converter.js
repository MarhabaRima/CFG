function convertCurrency() {
    // Get the GBP amount from the input field
    const gbpAmount = parseFloat(document.getElementById("gbp-amount").value);

    // Conversion rate from GBP to EGP
    const conversionRate = 38.53;

    // Validate the input
    if (isNaN(gbpAmount) || gbpAmount <= 0) {
        alert("Please enter a valid GBP amount.");
        return;
    }

    // Calculate the EGP amount
    const egpAmount = gbpAmount * conversionRate;

    // Update the EGP amount in the output span
    document.getElementById("egp-amount").textContent = egpAmount.toFixed(2);
}