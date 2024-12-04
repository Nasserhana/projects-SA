export const validateCardNumber = (value: string): boolean => {
  return /^\d{16}$/.test(value.replace(/\s/g, ''));
};

export const validateCVV = (value: string): boolean => {
  return /^\d{3,4}$/.test(value);
};

export const validateZipCode = (value: string): boolean => {
  return /^\d{5}(-\d{4})?$/.test(value);
};

export const validateName = (value: string): boolean => {
  return /^[a-zA-Z\s]{2,50}$/.test(value);
};

export const validateEmail = (value: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

export const formatCardNumber = (value: string): string => {
  const digits = value.replace(/\D/g, '');
  const groups = digits.match(/.{1,4}/g) || [];
  return groups.join(' ').substr(0, 19);
};

export const formatExpiryDate = (value: string): string => {
  const digits = value.replace(/\D/g, '');
  if (digits.length >= 2) {
    return `${digits.substr(0, 2)}/${digits.substr(2, 2)}`;
  }
  return digits;
};