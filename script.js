
<script>
document.getElementById('convertButton').addEventListener('click', function() {
    const unit1 = document.getElementById('selectUnit1').value;
    const unit2 = document.getElementById('selectUnit2').value;
    const inputValue = parseFloat(document.getElementById('inputValue').value);

    let result;
  
    if (unit1 == unit2) {
        result = inputValue;
    } else if (unit1 === 'Milimetre' && unit2 === 'Centilitre') {
        result = inputValue / 10;
    } else if (unit1 === 'Centilitre' && unit2 === 'Litre') {
        result = inputValue / 100;
    } else if (unit1 === 'Litre' && unit2 === 'Centilitre') {
        result = inputValue * 100;
    } else if (unit1 === 'Centilitre' && unit2 === 'Milimetre') {
        result = inputValue * 10;
    } else {
        result = 'Invalid unit conversion';
    }

    document.getElementById('outputResult').value = result;
});

document.getElementById('volumeButton').addEventListener('click', function() {
    // Add functionality for volume conversion
    alert('Volume conversion functionality coming soon!');
});

document.getElementById('weightButton').addEventListener('click', function() {
    // Add functionality for weight conversion
    alert('Weight conversion functionality coming soon!');
});


</script>


