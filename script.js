// Event listener for the 'Calculator' link
document.getElementById('calculatorLink').addEventListener('click', function(event) {
    // Prevents the default action of the event (e.g., following a link)
    event.preventDefault();
     // Alerts the user that the calculator function is coming soon
    alert('Calculator function coming soon!');
});

// Event listener for the 'Periodic Table' link
document.getElementById('periodicTableLink').addEventListener('click', function(event) {
    // Prevents the default action of the event
    event.preventDefault();
    // Alerts the user that the periodic table is coming soon
    alert('Periodic Table coming soon!');
});

// Event listener for the 'Convert' button
document.getElementById('convertButton').addEventListener('click', function() {
    // Fetches the selected units and input value from the HTML
    const unit1 = document.getElementById('selectUnit1').value;
    const unit2 = document.getElementById('selectUnit2').value;
    const inputValue = parseFloat(document.getElementById('inputValue').value);

    // Variable to store the conversion result
    let result;

     // Checks the selected units and performs the appropriate conversion
    if (unit1 === unit2) {result = inputValue;
    } else if (unit1 === 'Mililitre' && unit2 === 'Centilitre') {
        result = inputValue / 10;
    } else if (unit1 === 'Centilitre' && unit2 === 'Litre') {
        result = inputValue / 100;
    } else if (unit1 === 'Litre' && unit2 === 'Centilitre') {
        result = inputValue * 100;
    } else if (unit1 === 'Centilitre' && unit2 === 'Mililitre') {
        result = inputValue * 10;
    } else if (unit1 === 'Mililitre' && unit2 === 'Litre') {
        result = inputValue / 1000;
    } else if (unit1 === 'Litre' && unit2 === 'Mililitre') {
        result = inputValue * 1000;
    } else {
        result = 'Invalid unit conversion';
    }

    // Displays the conversion result in the HTML
    document.getElementById('outputResult').value = result;
});

// Event listener for the 'Weight' button
document.getElementById('weightButton').addEventListener('click', function() {
    // Alerts the user that the weight conversion functionality is coming soon
    alert('Weight conversion functionality coming soon!');
});