'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        My E-Commerce
      </Link>
      <div>
        <Link href="/cart" className="ml-4 hover:underline">
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
