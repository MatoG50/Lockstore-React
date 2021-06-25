import './Products.css';
import PageTitle from './PageTitle';
import { useHistory } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from './redux/actions/lockstoreActions';
import Today from './Today';
import { useState } from 'react';

const Products = () => {
  const [searchProd, setSearchProd] = useState('');
  const product = useSelector(
    state => state.displayProducts.products?.Products
  );
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className='main-page'>
      <Today />
      <PageTitle title='Products' />
      <p className='total-prod'>
        Total Products: <span>{product ? product.length : null}</span>
      </p>
      <button
        id='add-product'
        onClick={() => {
          history.push('/addproduct');
        }}
      >
        Add Product
      </button>
      <input
        type='text'
        id='search'
        placeholder='Search a product'
        onChange={e => {
          setSearchProd(e.target.value);
        }}
      />

      <div className='products-list'>
        <ProductCard prodSearch={searchProd} />
      </div>
    </div>
  );
};

export default Products;
