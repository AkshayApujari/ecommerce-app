// pages/admin/add-product.js
import { useState } from 'react';

export default function AddProduct() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log(data);

    if (data.success) {
      alert('Product added successfully');
    } else {
      alert('Error: ' + data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} required />
      <input name="description" placeholder="Description" onChange={handleChange} required />
      <input name="price" placeholder="Price" type="number" onChange={handleChange} required />
      <input name="image" placeholder="Image URL" onChange={handleChange} required />
      <button type="submit">Add Product</button>
    </form>
  );
}
