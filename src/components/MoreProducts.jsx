import React from 'react';
import moreProductsData from './GlobalHeader.json';
import './MoreProducts.css';

const MoreProducts = () => {
  return (
    <div className='more-products-wrapper'>
      <div className='more-product-container'>
        <div className='product-container-rows'>
          <div className='test'>
            <h2>More From HappyFox</h2>
            <div className='product-rows'>
              {moreProductsData.moreProducts.map((product, index) => (
                <div key={index} className='product-card'>
                  <img src={product.imageUrl} alt="icon"/>
                  <h4>{product.ProductName}</h4>
                  <p>{product.ProductDesc}</p>
                  <a href="#">
                    {product.ctaText}
                    <img src="https://assets.www.happyfox.com/v2/images/right-arrow-small.svg" alt="icon" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreProducts;
