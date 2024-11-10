function generateRandomNumber() {
    // Retrieve minimum and maximum values from input fields
    const minValue = parseInt(document.getElementById("min-value").value, 10);
    const maxValue = parseInt(document.getElementById("max-value").value, 10);

    // Check if inputs are valid numbers
    if (isNaN(minValue) || isNaN(maxValue)) {
        alert("Please enter valid numerical values for both fields.");
        return;
    }

    // Ensure minValue is less than or equal to maxValue
    if (minValue > maxValue) {
        alert("Minimum value cannot be greater than the maximum value.");
        return;
    }

    // Calculate random number within the specified range
    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

    // Display the result in the output element
    const outputElement = document.getElementById("random-number");
    outputElement.textContent = randomNumber;
    outputElement.style.fontWeight = "bold";
    outputElement.style.color = "#007bff";  // Optional styling to make the output more prominent
}
