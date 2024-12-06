import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Productdetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`
        );
        const data = await res.json();
        setProduct(data.data);
        console.log(data)
      } catch (error) {
        console.error( error);
      }
    };
    fetchProduct();
  }, [id]);  
 
 

  return (
    <div>
      <h2>Product Details</h2>
      <p>Category: {product.category}</p>
      <p>ID: {product.id}</p>
      <p>Price: {product.price}</p>
      <p>Image: {product.image}</p>
    </div>
  );
};

export default Productdetails;
