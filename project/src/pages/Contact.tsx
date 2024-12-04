import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FormInput } from '../components/FormInput';
import { useFormValidation } from '../hooks/useFormValidation';
import { validateName, validateEmail } from '../utils/validation';

const validationRules = {
  name: {
    validate: validateName,
    errorMessage: 'Please enter a valid name (letters only)',
  },
  email: {
    validate: validateEmail,
    errorMessage: 'Please enter a valid email address',
  },
  message: {
    validate: (value: string) => value.length >= 10,
    errorMessage: 'Message must be at least 10 characters long',
  },
};

const initialState = {
  name: '',
  email: '',
  message: '',
};

export function Contact() {
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    isValid,
  } = useFormValidation(initialState, validationRules);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid()) {
      console.log('Form submitted:', values);
      // Handle form submission
    }
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-500">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <FormInput
                label="Name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={() => handleBlur('name')}
                error={errors.name}
                required
              />

              <FormInput
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={() => handleBlur('email')}
                error={errors.email}
                required
              />

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className={`mt-1 block w-full rounded-md shadow-sm ${
                    errors.message
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
                  }`}
                  value={values.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur('message')}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-indigo-600" />
                <span className="ml-3 text-gray-700">support@ecoshop.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-indigo-600" />
                <span className="ml-3 text-gray-700">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-indigo-600" />
                <span className="ml-3 text-gray-700">
                  123 Eco Street, Green City, EC 12345
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}