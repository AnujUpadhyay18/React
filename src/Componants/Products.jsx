import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Products = () => {
  const [data, setData] = useState([]); 
  const [category, setCategory] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products"
        );
        const dta = await res.json();
        setData(dta.data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const selectedChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "") {
      setCategory([]); 
    } else {
      setCategory(data.filter((obj) => obj.category === selectedValue)); 
    }
  };

  const productsToDisplay = category.length > 0 ? category : data; 

  return (
    <>
      <div>
        <select onChange={selectedChange}>
          <option value="">--Select--</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="homedecor">homedecor</option>
        </select>
      </div>
      <div>Hey, it's working</div>
      <ul>
        {productsToDisplay.map((product, index) => (
          <li key={index}>
            <p>{product.category}</p>
              <Link to={`/product/${product.id}`}> view</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
