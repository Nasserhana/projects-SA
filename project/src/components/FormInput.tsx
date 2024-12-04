import React from 'react';

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
}

export function FormInput({
  label,
  name,
  type,
  value,
  onChange,
  onBlur,
  error,
  required = false,
  placeholder,
}: FormInputProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={() => onBlur()}
        required={required}
        placeholder={placeholder}
        className={`mt-1 block w-full rounded-md shadow-sm ${
          error
            ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}