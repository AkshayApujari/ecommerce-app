import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: string;
};

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const { cart, addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/api/products');
        setProducts(res.data.data);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🛍️ All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white rounded-lg shadow-md p-4">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-green-600 font-bold">₹{product.price}</p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => addToCart(product)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
              >
                Add to Cart
              </button>
              <Link href={`/product/${product._id}`}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                  View
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* 🛒 Cart Items Preview Section */}
      <h2 className="text-2xl font-bold mt-10 mb-4">🛒 Cart Items</h2>
      <ul className="list-disc pl-6">
        {cart.length === 0 ? (
          <li className="text-gray-500">Cart is empty</li>
        ) : (
          cart.map((item) => (
            <li key={item._id}>
              {item.title} - ₹{item.price}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
