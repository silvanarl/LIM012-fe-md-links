require('../src/main.js');

describe("add", () => {
  it("should return 15 to 5+10", () => {
    expect(add(5, 10)).toBe(15);
  });
});

describe('isValidPath', () => {
    it("debería ser una función", () => {
      expect(typeof isValidPath()).toBe('function');
    });
    it('debería retornar true para ruta válida', () => {
        expect(isValidPath('./example/sample_text.md')).toBe(true);
    });
  
    it('debería retornar true para ruta inválida', () => {
        expect(isValidPath('./documents/example/')).toBe(false);
    });
});

describe('isValidPath', () => {
    it("should return 15 to 5+10", () => {
      expect(typeof isValidPath()).toBe('function');
    });
    it('debería retornar true para "_"', () => {
        expect(isValidPath('_')).toBe(true);
    });
  
    it('debería retornar true para "_"', () => {
        expect(isValidPath('_')).toBe(false);
    });
});