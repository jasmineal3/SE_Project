document.getElementById('calculatorLink').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Calculator function coming soon!');
});

document.getElementById('periodicTableLink').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Periodic Table coming soon!');
});

document.getElementById('convertButton').addEventListener('click', function() {
    const unit1 = document.getElementById('selectUnit1').value;
    const unit2 = document.getElementById('selectUnit2').value;
    const inputValue = parseFloat(document.getElementById('inputValue').value);

    let result;

    if (unit1 === unit2) {result = inputValue;
    } else if (unit1 === 'Milimitre' && unit2 === 'Centilitre') {
        result = inputValue / 10;
    } else if (unit1 === 'Centilitre' && unit2 === 'Litre') {
        result = inputValue / 100;
    } else if (unit1 === 'Litre' && unit2 === 'Centilitre') {
        result = inputValue * 100;
    } else if (unit1 === 'Centilitre' && unit2 === 'Milimitre') {
        result = inputValue * 10;
    } else if (unit1 === 'Milimitre' && unit2 === 'Litre') {
        result = inputValue / 1000;
    } else if (unit1 === 'Litre' && unit2 === 'Milimitre') {
        result = inputValue * 1000;
    } else {
        result = 'Invalid unit conversion';
    }

    document.getElementById('outputResult').value = result;
});


document.getElementById('weightButton').addEventListener('click', function() {
    alert('Weight conversion functionality coming soon!');
});
