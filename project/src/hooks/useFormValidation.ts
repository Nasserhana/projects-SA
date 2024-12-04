import { useState, ChangeEvent } from 'react';

interface ValidationRules {
  [key: string]: {
    pattern?: RegExp;
    validate?: (value: string) => boolean;
    format?: (value: string) => string;
    errorMessage: string;
  };
}

export function useFormValidation<T extends { [key: string]: string }>(
  initialState: T,
  validationRules: ValidationRules
) {
  const [values, setValues] = useState<T>(initialState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateField = (name: string, value: string) => {
    const rule = validationRules[name];
    if (!rule) return true;

    if (rule.validate) {
      return rule.validate(value);
    }

    if (rule.pattern) {
      return rule.pattern.test(value);
    }

    return true;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const rule = validationRules[name];
    let formattedValue = value;

    if (rule?.format) {
      formattedValue = rule.format(value);
    }

    setValues((prev) => ({ ...prev, [name]: formattedValue }));

    if (touched[name]) {
      const isValid = validateField(name, formattedValue);
      setErrors((prev) => ({
        ...prev,
        [name]: isValid ? '' : validationRules[name].errorMessage,
      }));
    }
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    const isValid = validateField(name, values[name]);
    setErrors((prev) => ({
      ...prev,
      [name]: isValid ? '' : validationRules[name].errorMessage,
    }));
  };

  const isValid = () => {
    const newErrors: { [key: string]: string } = {};
    let isValid = true;

    Object.keys(validationRules).forEach((name) => {
      const value = values[name as keyof T];
      const fieldIsValid = validateField(name, value);
      if (!fieldIsValid) {
        newErrors[name] = validationRules[name].errorMessage;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  return {
    values,
    errors,
    handleChange,
    handleBlur,
    isValid,
    setValues,
  };
}