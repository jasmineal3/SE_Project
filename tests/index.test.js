
const {myFunction} = require('./index');
decribe("Smoke Test", () => {
    Test('that 2 + 2 is 4', () => {
        expect(2+2).toBe(4);
    });
  
});

describe("test func my f", () => {
    Test('that 2 + 2 is 4', () => {
        expect(myFunction(2,2)).toBe(4);
    });
})