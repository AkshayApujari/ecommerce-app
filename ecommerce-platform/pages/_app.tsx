// pages/_app.tsx
import '../styles/globals.css'; // or your main CSS file
import type { AppProps } from 'next/app';
import Navbar from '@/components/ui/Navbar';
import { CartProvider } from '@/context/CartContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Navbar />
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
