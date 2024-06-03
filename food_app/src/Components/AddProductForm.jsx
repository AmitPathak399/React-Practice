// AddProductForm.js
import Button from './Button';
import React, { useState } from 'react';
import styles from '../Styles/AddProductForm.module.css';
const AddProductForm = ({ onSubmit }) => {
  const [productData, setProductData] = useState({
    productName: '',
    productImage: '',
    productCalories: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      food: {
        label: productData.productName,
        image: productData.productImage,
        nutrients: {
          ENERC_KCAL: parseFloat(productData.productCalories),
        },
      },
    };

    onSubmit(newProduct);
    setProductData({
      productName: '',
      productImage: '',
      productCalories: '',
    });
    alert('product added successfully!')
  };

  return (
    <div className={styles.add_product_form}>
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={productData.productName}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="productImage">Product Image URL:</label>
        <input
          type="text"
          id="productImage"
          name="productImage"
          value={productData.productImage}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="productCalories">Calories:</label>
        <input
          type="text"
          id="productCalories"
          name="productCalories"
          value={productData.productCalories}
          onChange={handleInputChange}
          required
        />

        <Button type="submit" label="Add Recipe" color="blue" />
      </form>
    </div>
  );
};

export default AddProductForm;
