import { calculator, plotGraph } from "./tasksUtils";

describe('Term calculator', () => {
    it('should return value when input has space', () => {
        const actual = calculator("(5 + 8) * 3 / 8 + 3")
        expect(actual).toBe(7.875)
    });

    it('should return value when input has space', () => {
        const actual = calculator("(5+8)*3/8+3")
        expect(actual).toBe(7.875)
    });

    it('should return value currently when input have space and number in () has two digit', () => {
        const actual = calculator("(50 + 89) * 3 / 8 + 3")
        expect(actual).toBe(55.125)
    });

    it('should return zero the input when filling in the input is text', () => {
        const actual = calculator("Test")
        expect(actual).toBeNaN();
    });

    it('should return value currently when input has +', () => {
        const actual = calculator("5+8")
        expect(actual).toBe(13)
    });

    it('should return value currently when input has + with space', () => {
        const actual = calculator(" 5 + 8 ")
        expect(actual).toBe(13)
    });

    it('should return value currently when input has -', () => {
        const actual = calculator("15-8")
        expect(actual).toBe(7)
    });

    it('should return value currently when input has *', () => {
        const actual = calculator("15 * 8")
        expect(actual).toBe(120)
    });

    it('should return value currently when input has *', () => {
        const actual = calculator("15 * 55")
        expect(actual).toBe(825)
    });

    it('should return value currently when input has /', () => {
        const actual = calculator("15/8")
        expect(actual).toBe(1.875)
    });

    it('should return value currently when input has + with -', () => {
        const actual = calculator("15+8-5")
        expect(actual).toBe(18)
    });

    it('should return value currently when input has + with - and +', () => {
        const actual = calculator("15+8-5+50")
        expect(actual).toBe(68)
    });

    it('should return value currently when input has 3+2*2', () => {
        const actual = calculator("3+2*2")
        expect(actual).toBe(7)
    });
});