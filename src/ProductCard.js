// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ prodSearch }) => {
  const product = useSelector(
    state => state.displayProducts.products?.Products
  );

  const productList =
    product &&
    product
      // search product
      .filter(prod => {
        if (prodSearch === '') {
          return prod;
        } else if (
          prod.name.toLowerCase().includes(prodSearch.toLocaleLowerCase())
        ) {
          return prod;
        }
      })
      // show products
      .map(prod => {
        return (
          <div className='product-card' key={prod['product id']}>
            <Link to={`/products/${prod['product id']}`}>
              <img
                id='product-image'
                src='./resources/products.svg'
                alt={prod.name}
              />
              <p className='product-name'>{prod.name}</p>
              <p className='inventory'>
                <span className='items-no'>{prod.inventory}</span> items
              </p>
              <p className='cost'>
                Kshs. <span className='k-shs'>{prod.price}</span>
              </p>
            </Link>
          </div>
        );
      });

  return !productList ? (
    <div className='loading'>Loading products...</div>
  ) : (
    productList
  );
};

export default ProductCard;
