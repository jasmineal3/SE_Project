/**
 * Convert volume between different units.
 * @param {number} value - The value to convert.
 * @param {string} fromUnit - The unit to convert from.
 * @param {string} toUnit - The unit to convert to.
 * @returns {number|string} - The converted value or an error message.
 */
function convertVolume(value, fromUnit, toUnit) {
    // Conversion rates to Milimetre
    const conversionRates = {
        Milimetre: 1,
        Centilitre: 10,
        Litre: 1000
    };

    // Check if provided units are valid
    if (!conversionRates[fromUnit] || !conversionRates[toUnit]) {
        return 'Invalid unit conversion';
    }

    // Convert value to Milimetre first
    const valueInMilimetre = value * conversionRates[fromUnit];
    // Convert from Milimetre to the target unit
    const convertedValue = valueInMilimetre / conversionRates[toUnit];

    return convertedValue;
}

module.exports = { convertVolume };
