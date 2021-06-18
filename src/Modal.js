import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import './Modal.css';
import { fetchProduct } from './redux/actions/lockstoreActions';

const Modal = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== '') dispatch(fetchProduct(productId));
  }, []);
  //   if (!open) return null;
  return (
    <div className='main-page'>
      <div className='modal-content'>
        <span className='close'>
          <img src='./resources/close-x.svg' alt='close' id='close-x' />
        </span>
        <p className='user-det'>Product Details</p>
        <div className='underline-user-text'></div>
        <p className='prod-name'>Sugar</p>
        <p className='prod-inv'>
          Inventory: <span className='s-inv'>20</span>
        </p>
        <p className='prod-price'>
          Price: <span className='s-ks'>Kshs.</span>
          <span className='s-price'>20</span>
        </p>
        <p className='prod-min-stock'>
          Minimun Stock: <span className='s-min-stock'>5</span>
        </p>
        <Link className='update' to={`/products/update`}>
          Update
        </Link>
        <Link className='delete' to={`/products/delete`}>
          Delete
        </Link>
      </div>
    </div>
  );
};

export default Modal;
