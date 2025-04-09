import { useCart } from '@/context/CartContext';
import React from 'react';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li key={item._id} className="py-4 flex justify-between items-center">
                <div>
                  <p className="text-lg font-medium">{item.title}</p>
                  <p className="text-sm text-gray-600">₹{item.price}</p>
                </div>
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-lg font-semibold">
            Total: ₹{total}
          </div>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            onClick={() => alert('✅ Checkout coming soon!')}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
