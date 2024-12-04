import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { FormInput } from '../components/FormInput';
import { useFormValidation } from '../hooks/useFormValidation';
import {
  validateCardNumber,
  validateCVV,
  validateZipCode,
  validateName,
  formatCardNumber,
  formatExpiryDate,
} from '../utils/validation';

const validationRules = {
  cardNumber: {
    validate: validateCardNumber,
    format: formatCardNumber,
    errorMessage: 'Please enter a valid 16-digit card number',
  },
  expiryDate: {
    pattern: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
    format: formatExpiryDate,
    errorMessage: 'Please enter a valid expiry date (MM/YY)',
  },
  cvv: {
    validate: validateCVV,
    errorMessage: 'Please enter a valid CVV (3-4 digits)',
  },
  name: {
    validate: validateName,
    errorMessage: 'Please enter a valid name (letters only)',
  },
  zipCode: {
    validate: validateZipCode,
    errorMessage: 'Please enter a valid ZIP code',
  },
};

const initialState = {
  cardNumber: '',
  expiryDate: '',
  cvv: '',
  name: '',
  address: '',
  city: '',
  zipCode: '',
};

export function Checkout() {
  const navigate = useNavigate();
  const { items, clearCart } = useCartStore();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
      clearCart();
      navigate('/');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold mb-8">Checkout</h2>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-lg font-medium mb-4">Payment Details</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormInput
              label="Card Number"
              name="cardNumber"
              type="text"
              value={values.cardNumber}
              onChange={handleChange}
              onBlur={() => handleBlur('cardNumber')}
              error={errors.cardNumber}
              required
              placeholder="1234 5678 9012 3456"
            />

            <div className="grid grid-cols-2 gap-4">
              <FormInput
                label="Expiry Date"
                name="expiryDate"
                type="text"
                value={values.expiryDate}
                onChange={handleChange}
                onBlur={() => handleBlur('expiryDate')}
                error={errors.expiryDate}
                required
                placeholder="MM/YY"
              />

              <FormInput
                label="CVV"
                name="cvv"
                type="text"
                value={values.cvv}
                onChange={handleChange}
                onBlur={() => handleBlur('cvv')}
                error={errors.cvv}
                required
                placeholder="123"
              />
            </div>

            <FormInput
              label="Name on Card"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={() => handleBlur('name')}
              error={errors.name}
              required
            />

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Shipping Address
              </label>
              <textarea
                name="address"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={values.address}
                onChange={handleChange}
                onBlur={() => handleBlur('address')}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormInput
                label="City"
                name="city"
                type="text"
                value={values.city}
                onChange={handleChange}
                onBlur={() => handleBlur('city')}
                required
              />

              <FormInput
                label="ZIP Code"
                name="zipCode"
                type="text"
                value={values.zipCode}
                onChange={handleChange}
                onBlur={() => handleBlur('zipCode')}
                error={errors.zipCode}
                required
                placeholder="12345"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
            >
              Pay ${total.toFixed(2)}
            </button>
          </form>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Order Summary</h3>
          <div className="bg-gray-50 p-6 rounded-lg">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between mb-4">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between">
                <p className="font-medium">Total</p>
                <p className="font-medium">${total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}