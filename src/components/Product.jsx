import React from 'react';
import '../styles/Product.css';

const Product = ({ name, price, oldPrice, discount, writeup, img, percent }) => {
  return (
    <div className="product">
      <img src={img} alt="" className='product-image' />
      <div className='content'>
        <h3>{name}</h3>
        <p>{writeup}</p>
        <div className='price'>
          <p>Price: {price}</p>
          <span className="old-price">{oldPrice}</span>
        </div>
        <div className='discount'>
          <p>Save: {discount}</p>
          <p>{percent}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
