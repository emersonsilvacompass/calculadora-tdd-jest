export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validateCPF = (cpf) => {
  const cleanCPF = cpf.replace(/\D/g, '');

  if (cleanCPF.length !== 11 || /^(\d)\1+$/.test(cleanCPF)) return false;

  const numbers = cleanCPF.split('').map(Number);

  const calculateDigit = (sliceEnd) => {
    const sum = numbers
      .slice(0, sliceEnd)
      .reduce((acc, num, idx) => acc + num * (sliceEnd + 1 - idx), 0);
    const remainder = (sum * 10) % 11;
    return remainder === 10 ? 0 : remainder;
  };

  const digit1 = calculateDigit(9);
  const digit2 = calculateDigit(10);

  return digit1 === numbers[9] && digit2 === numbers[10];
};