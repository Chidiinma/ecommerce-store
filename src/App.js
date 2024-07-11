import React from 'react';
import Header from './components/Header';
import Product from './components/Product';
import Footer from './components/Footer';
import './App.css';
import Navbar from './components/Navbar';
import Image from './components/Image';
import Pic1 from './components/Assets/Pictures/classic-white-tee.png'
import Pic2 from './components/Assets/Pictures/crossbody-bag.png'
import Pic3 from './components/Assets/Pictures/sneakers.png'
import Pic4 from './components/Assets/Pictures/vintage.png'
import Pic5 from './components/Assets/Pictures/ballet-flats-(brown).png'
import Pic6 from './components/Assets/Pictures/the-tote-bag.png'
import Pic7 from './components/Assets/Pictures/classic-baseball-cap.png'
import Pic8 from './components/Assets/Pictures/chiffon.png'

function App() {
  const products = [
    { img: Pic1, writeup: 'A versatile and timeless piece made from 100% organic cotton. Perfect for layering or wearing on its own.', name: 'Classic White Tee', price: '7,000.00', oldPrice: '12,000.00', discount: '5,000', percent: '-2%' },
    { img: Pic2, writeup: 'A versatile and timeless piece made from 100% organic cotton. Perfect for layering or wearing on its own.', name: 'Crossbody Bag', price: '26,000.00', oldPrice: '31,000.00', discount: '4,000', percent: '-6%' },
    { img: Pic3, writeup: 'A versatile and timeless piece made from 100% organic cotton. Perfect for layering or wearing on its own.', name: 'Sneakers', price: '17,000.00', oldPrice: '32,000.00', discount: '15,000', percent: '-5%' },
    { img: Pic4, writeup: 'A versatile and timeless piece made from 100% organic cotton. Perfect for layering or wearing on its own.', name: 'Vintage T-shirt', price: '7,000.00', oldPrice: '12,000.00', discount: '5,000', percent: '-2%' },
    { img: Pic5, writeup: 'A versatile and timeless piece made from 100% organic cotton. Perfect for layering or wearing on its own.', name: 'Ballet Flats', price: '7,000.00', oldPrice: '12,000.00', discount: '5,000', percent: '-2%' },
    { img: Pic6, writeup: 'A versatile and timeless piece made from 100% organic cotton. Perfect for layering or wearing on its own.', name: 'The Tote bag', price: '7,000.00', oldPrice: '12,000.00', discount: '5,000', percent: '-2%' },
    { img: Pic7, writeup: 'A versatile and timeless piece made from 100% organic cotton. Perfect for layering or wearing on its own.', name: 'Classic Baseball cap', price: '7,000.00', oldPrice: '12,000.00', discount: '5,000', percent: '-2%' },
    { img: Pic8, writeup: 'A versatile and timeless piece made from 100% organic cotton. Perfect for layering or wearing on its own.', name: 'Chiffon', price: '11,000.00', oldPrice: '17,000.00', discount: '9,000', percent: '-7%' },
    
  ];

  return (
    <div className="App">
      <Navbar/>
      <Header />
      <Image/>
      <main>
        <div className='title'><h2>Our Latest Products</h2></div>
        <div className="product-list">
          {products.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
