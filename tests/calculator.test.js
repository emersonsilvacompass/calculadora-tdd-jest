import { add, subtract, multiply, divide } from '../src/calculator.js';

describe('Calculadora - Testes Avançados', () => {
  // --- SOMA ---
  test('Soma: Deve somar números negativos', () => {
    expect(add(-5, -5)).toBe(-10);
    expect(add(-5, 5)).toBe(0);
  });

  test('Soma: Deve lidar com números decimais (Ponto Flutuante)', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  // --- SUBTRAÇÃO ---
  test('Subtração: Deve retornar negativo se o segundo número for maior', () => {
    expect(subtract(5, 10)).toBe(-5);
  });

  // --- MULTIPLICAÇÃO ---
  test('Multiplicação: Qualquer número vezes zero deve ser zero', () => {
    expect(multiply(100, 0)).toBe(0);
    expect(multiply(0, 5)).toBe(0);
  });

  test('Multiplicação: Números negativos (Regra de sinais)', () => {
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(-2, -2)).toBe(4);
  });

  // --- DIVISÃO ---
  test('Divisão: Deve lançar erro explícito ao dividir por zero', () => {
    expect(() => divide(10, 0)).toThrow("Divisão por zero não é permitida");
  });

  test('Divisão: Zero dividido por qualquer número deve ser zero', () => {
    expect(divide(0, 10)).toBe(0);
  });
});