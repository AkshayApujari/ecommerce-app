import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (id) {
      axios.get(`/api/products/${id}`).then(res => {
        setProduct(res.data.data);
      });
    }
  }, [id]);

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img src={product.image} className="w-full h-96 object-cover rounded" alt={product.title} />
      <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
      <p className="text-lg mt-2 text-gray-600">{product.description}</p>
      <p className="text-2xl font-semibold mt-4">₹{product.price}</p>

      <div className="mt-6 flex gap-4">
        <button className="bg-green-500 text-white px-6 py-2 rounded">Add to Cart</button>
        <button className="bg-black text-white px-6 py-2 rounded">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetail;
