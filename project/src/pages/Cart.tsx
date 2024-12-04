import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

export function Cart() {
  const { items, removeItem, updateQuantity } = useCartStore();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Your cart is empty</h2>
          <Link
            to="/products"
            className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold mb-8">Shopping Cart</h2>
      <div className="grid grid-cols-1 gap-y-8">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 border-b pb-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-gray-500">${item.price}</p>
              <div className="mt-2 flex items-center gap-2">
                <select
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                  className="rounded border p-1"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between items-center">
        <div>
          <p className="text-lg font-medium">Total: ${total.toFixed(2)}</p>
        </div>
        <Link
          to="/checkout"
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}