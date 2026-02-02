import { validateEmail, validateCPF } from '../src/utils.js';

describe('Validações - Testes de Robustez', () => {
  
  // --- E-MAIL ---
  describe('Validação de E-mail', () => {
    test('Deve aceitar e-mails válidos simples', () => {
      expect(validateEmail('nome@exemplo.com')).toBe(true);
      expect(validateEmail('nome.sobrenome@empresa.com.br')).toBe(true);
    });

    test('Deve rejeitar e-mails mal formatados', () => {
      expect(validateEmail('semArroba.com')).toBe(false);
      expect(validateEmail('joao@.com')).toBe(false); // Sem domínio antes do ponto
      expect(validateEmail('joao@empresa')).toBe(false); // Sem extensão (.com)
      expect(validateEmail('')).toBe(false); // String vazia
    });

    test('Deve rejeitar e-mails com espaços', () => {
      expect(validateEmail('joao @empresa.com')).toBe(false);
    });
  });

  // --- CPF ---
  describe('Validação de CPF', () => {
    test('Deve aprovar um CPF Válido (Com formatação)', () => {
      // Este é um número matematicamente válido (gerado para teste)
      expect(validateCPF('529.982.247-25')).toBe(true);
    });

    test('Deve aprovar um CPF Válido (Apenas números/String pura)', () => {
      expect(validateCPF('52998224725')).toBe(true);
    });

    test('Deve rejeitar CPF com dígitos repetidos (mesmo passando na matemática)', () => {
      expect(validateCPF('000.000.000-00')).toBe(false);
      expect(validateCPF('99999999999')).toBe(false);
    });

    test('Deve rejeitar CPF com tamanho incorreto', () => {
      expect(validateCPF('123')).toBe(false);
      expect(validateCPF('123456789012345')).toBe(false);
    });

    test('Deve rejeitar CPF matematicamente inválido', () => {
      // Parece válido, mas o dígito verificador final (00) está errado
      expect(validateCPF('529.982.247-00')).toBe(false);
    });
  });
});