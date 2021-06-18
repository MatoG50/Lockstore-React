import './Products.css';
import Date from './Date';
import PageTitle from './PageTitle';
import { useHistory } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from './redux/actions/lockstoreActions';

const Products = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className='main-page'>
      <Date />
      <PageTitle title='Products' />
      <p className='total-prod'>
        Total Products: <span>20</span>
      </p>
      <button
        id='add-product'
        onClick={() => {
          history.push('/addproduct');
        }}
      >
        Add Product
      </button>
      <input type='text' id='search' placeholder='Search a product' />

      <div className='products-list'>
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
