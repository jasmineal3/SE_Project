const {convertVolume} = require('./index.js');

describe("Smoke Test", () => {
    // Basic smoke test to ensure Jest is running correctly
    test('that 1 is 1', () => {
        expect(1).toBe(1);
    });
});

describe("Test convertVolume function", () => {
    // Test conversion from Mililitre to Centilitre
    test('converts 10 Mililitre to Centilitre', () => {
        expect(convertVolume(10, 'Mililitre', 'Centilitre')).toBe(1);
    });

    // Test conversion for a value of zero
    test('converts 0 Mililitre to Centilitre', () => {
        expect(convertVolume(0, 'Mililitre', 'Centilitre')).toBe(0);
    });

    // Test conversion for a negative value
    test('converts -10 Mililitre to Centilitre', () => {
        expect(convertVolume(-10, 'Mililitre', 'Centilitre')).toBe(-1);
    });
});

describe("Test convertVolume function", () => {
    // Test conversion from Centilitre to Litre
    test('converts 100 Centilitre to Litre', () => {
        expect(convertVolume(100, 'Centilitre', 'Litre')).toBe(1);
    });

    // Test conversion for a value of zero
    test('converts 0 Centilitre to Litre', () => {
        expect(convertVolume(0, 'Centilitre', 'Litre')).toBe(0);
    });

    // Test conversion for a negative value
    test('converts -10 Centilitre to Litre', () => {
        expect(convertVolume(-100, 'Centilitre', 'Litre')).toBe(-1);
    });
});

describe("Test convertVolume function", () => {
    // Test conversion from Mililitre to Centilitre
    test('converts 1 Litre to Mililitre', () => {
        expect(convertVolume(1, 'Litre', 'Mililitre')).toBe(1000);
    });

    // Test conversion for a value of zero
    test('converts 0 Litre to Mililitre', () => {
        expect(convertVolume(0, 'Litre', 'Mililitre')).toBe(0);
    });

    // Test conversion for a negative Test to be invalid unit conversion handling
    test('converts -10 Litre to Mililitre', () => {
        expect(convertVolume(-1, 'Litre', 'Mililitre')).toBe(-1000);
    });
});

describe("Test invalid unit conversion", () => {
    test('returns "Invalid unit conversion" for invalid units', () => {
        expect(convertVolume(1, 'InvalidUnit', 'Centilitre')).toBe('Invalid unit conversion');
    });
});