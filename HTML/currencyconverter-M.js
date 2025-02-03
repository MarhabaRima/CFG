// Exchange rates for 20 currencies relative to each other
const exchangeRates = {
    USD: { EUR: 0.961, GBP: 0.803, INR: 82.32, AED: 3.67, SGD: 1.35, JPY: 110.25, AUD: 1.60, CAD: 1.44, CHF: 0.91, CNY: 7.17, NZD: 1.50, SEK: 8.5, NOK: 8.6, KRW: 1120.5, ZAR: 15.2, THB: 33.0, MXN: 20.0, BRL: 5.1, PLN: 3.85, HKD: 7.8 },
    EUR: { USD: 1.0406, GBP: 0.8357, INR: 85.66, AED: 3.81, SGD: 1.40, JPY: 114.70, AUD: 1.67, CAD: 1.50, CHF: 0.947, CNY: 7.47, NZD: 1.56, SEK: 8.85, NOK: 8.96, KRW: 1167.5, ZAR: 15.8, THB: 34.3, MXN: 20.8, BRL: 5.3, PLN: 4.0, HKD: 8.1 },
    GBP: { USD: 1.245, EUR: 1.196, INR: 102.5, AED: 4.56, SGD: 1.67, JPY: 136.5, AUD: 1.99, CAD: 1.79, CHF: 1.13, CNY: 8.94, NZD: 1.87, SEK: 10.6, NOK: 10.7, KRW: 1394.5, ZAR: 18.9, THB: 41.0, MXN: 24.9, BRL: 6.3, PLN: 4.8, HKD: 9.7 },
    INR: { USD: 0.012, EUR: 0.0117, GBP: 0.0098, AED: 0.0446, SGD: 0.016, JPY: 1.34, AUD: 0.0194, CAD: 0.0175, CHF: 0.0111, CNY: 0.087, NZD: 0.0182, SEK: 0.104, NOK: 0.105, KRW: 16.1, ZAR: 0.185, THB: 0.4, MXN: 0.25, BRL: 0.0619, PLN: 0.0468, HKD: 0.095 },
    AED: { USD: 0.272, EUR: 0.2623, GBP: 0.2192, INR: 22.4, SGD: 0.368, JPY: 30.04, AUD: 0.4368, CAD: 0.3944, CHF: 0.246, CNY: 1.953, NZD: 0.413, SEK: 2.373, NOK: 2.407, KRW: 368.7, ZAR: 4.23, THB: 9.12, MXN: 5.6, BRL: 1.385, PLN: 1.05, HKD: 2.10 },
    SGD: { USD: 0.741, EUR: 0.714, GBP: 0.598, INR: 61.2, AED: 2.718, JPY: 82.5, AUD: 1.196, CAD: 1.078, CHF: 0.672, CNY: 5.338, NZD: 1.129, SEK: 6.49, NOK: 6.58, KRW: 1007.2, ZAR: 11.56, THB: 24.9, MXN: 15.3, BRL: 3.79, PLN: 2.87, HKD: 5.73 },
    JPY: { USD: 0.0091, EUR: 0.0087, GBP: 0.0073, INR: 0.747, AED: 0.0333, SGD: 0.0121, AUD: 0.0145, CAD: 0.0130, CHF: 0.0083, CNY: 0.065, NZD: 0.0136, SEK: 0.078, NOK: 0.079, KRW: 12.2, ZAR: 0.14, THB: 0.31, MXN: 0.19, BRL: 0.047, PLN: 0.035, HKD: 0.073 },
    AUD: { USD: 0.6236, EUR: 0.5994, GBP: 0.5015, INR: 51.1, AED: 2.297, SGD: 0.836, JPY: 69.05, CAD: 0.899, CHF: 0.561, CNY: 4.36, NZD: 0.94, SEK: 5.4, NOK: 5.48, KRW: 837.2, ZAR: 9.6, THB: 20.7, MXN: 12.7, BRL: 3.15, PLN: 2.38, HKD: 4.75 },
    CAD: { USD: 0.694, EUR: 0.668, GBP: 0.558, INR: 57.0, AED: 2.564, SGD: 0.933, JPY: 77.0, AUD: 1.113, CHF: 0.623, CNY: 4.84, NZD: 1.05, SEK: 6.0, NOK: 6.1, KRW: 931.3, ZAR: 10.6, THB: 23.0, MXN: 14.1, BRL: 3.5, PLN: 2.65, HKD: 5.30 },
    // Add more currencies following this structure if needed
};

// Function to convert currency
function convertCurrency() {
    const from = document.getElementById("currency-from").value; // Selected "from" currency
    const to = document.getElementById("currency-to").value; // Selected "to" currency
    const amount = parseFloat(document.getElementById("amount").value); // Amount to convert

    // Validate input
    if (isNaN(amount) || amount <= 0) {
        document.getElementById("conversion-result").textContent = "Please enter a valid amount!";
        return;
    }

    // Retrieve the exchange rate
    const rate = exchangeRates[from]?.[to] || 1; // Default to 1 if no rate is found
    const converted = (amount * rate).toFixed(2); // Perform conversion and round to 2 decimals

    // Display the result
    document.getElementById("conversion-result").textContent = `${amount} ${from} = ${converted} ${to}`;
}

// Attach the function to the button click event
document.getElementById("convert-button").addEventListener("click", convertCurrency);