const { convertVolume } = require('./index');

describe("Smoke Test", () => {
    // Basic smoke test to ensure Jest is running correctly
    test('that 1 is 1', () => {
        expect(1).toBe(1);
    });
});

describe("Test convertVolume function", () => {
    // Test conversion from Milimetre to Centilitre
    test('converts 10 Milimetre to Centilitre', () => {
        expect(convertVolume(10, 'Milimetre', 'Centilitre')).toBe(1);
    });

    // Test conversion from Litre to Centilitre
    test('converts 1 Litre to Centilitre', () => {
        expect(convertVolume(1, 'Litre', 'Centilitre')).toBe(100);
    });

    // Test invalid unit conversion handling
    test('returns "Invalid unit conversion" for invalid units', () => {
        expect(convertVolume(1, 'InvalidUnit', 'Centilitre')).toBe('Invalid unit conversion');
    });
});
