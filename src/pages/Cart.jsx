import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10.00, quantity: 1, image: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Product 2', price: 20.00, quantity: 2, image: 'https://via.placeholder.com/100' },
    { id: 3, name: 'Product 3', price: 30.00, quantity: 3, image: 'https://via.placeholder.com/100' },
    { id: 4, name: 'Product 4', price: 40.00, quantity: 4, image: 'https://via.placeholder.com/100' },
    { id: 5, name: 'Product 5', price: 50.00, quantity: 5, image: 'https://via.placeholder.com/100' },
    { id: 6, name: 'Product 6', price: 60.00, quantity: 6, image: 'https://via.placeholder.com/100' },
    { id: 7, name: 'Product 7', price: 70.00, quantity: 7, image: 'https://via.placeholder.com/100' },
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const calculateDiscount = () => {
    const discountRate = 0.10; // Example discount rate of 10%
    return (calculateTotal() * discountRate).toFixed(2);
  };

  const calculateGST = () => {
    const gstRate = 0.18; // Example GST rate of 18%
    return (calculateTotal() * gstRate).toFixed(2);
  };

  const totalAfterDiscountAndGST = () => {
    const total = parseFloat(calculateTotal());
    const discount = parseFloat(calculateDiscount());
    const gst = parseFloat(calculateGST());
    return (total - discount + gst).toFixed(2);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left Side: Product List */}
      <div className="lg:w-3/4 p-4 border-b lg:border-r lg:border-b-0 border-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Cart Items</h2>
        <ul>
          {cartItems.map(item => (
            <li
              key={item.id}
              className="flex items-center mb-4 p-4 border-b border-gray-200 bg-white rounded-lg transition-transform transform"
            >
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
              <div className="flex-1">
                <span className="block text-lg font-semibold text-gray-700">{item.name}</span>
                <span className="text-gray-600">₹{item.price.toFixed(2)} x {item.quantity}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaTrashAlt className="text-red-500 cursor-pointer hover:text-red-700" />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side: Totals */}
      <div className="lg:w-1/4 p-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Summary</h2>
        <div className="text-lg">
          <div className="mb-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Subtotal: </span>
              <span>₹{calculateTotal()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Discount: </span>
              <span>-₹{calculateDiscount()}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-semibold">GST (18%): </span>
              <span>+₹{calculateGST()}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total: </span>
              <span>₹{totalAfterDiscountAndGST()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
