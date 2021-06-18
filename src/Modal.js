import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './Modal.css';
import { fetchProduct } from './redux/actions/lockstoreActions';

const Modal = () => {
  const history = useHistory();
  const product = useSelector(state => state.showProduct.product?.product);
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== '') dispatch(fetchProduct(productId));
  }, []);
  return (
    <div className='main-page'>
      {product && Object.keys(product).length === 0 ? (
        <div className='loading'>...Loading</div>
      ) : (
        <div className='modal'>
          <p className='user-det'>Product Details:</p>
          <div className='underline-user-text'></div>
          <p className='prod-name'>{product && product.name}</p>
          <p className='prod-inv'>
            Inventory:{' '}
            <span className='s-inv'>{product && product.inventory}</span>
          </p>
          <p className='prod-price'>
            Price: <span className='s-ks'>Kshs.</span>
            <span className='s-price'>{product && product.price}</span>
          </p>
          <p className='prod-min-stock'>
            Minimun Stock:
            <span className='s-min-stock'>
              {' '}
              {product && product.minimum_stock}
            </span>
          </p>
          <button className='update'>Update</button>
          <button className='delete'>Delete</button>
          <button
            className='back-btn'
            onClick={() => history.push('/products')}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Modal;
