import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './AddProduct.css';
import PageTitle from './PageTitle';
import { createProduct } from './redux/actions/lockstoreActions';
import Today from './Today';

const AddProduct = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [newProd, setNewProd] = useState({
    name: '',
    price: '',
    inventory: '',
    minimum_stock: '',
    category: '',
  });
  const state = useSelector(state => state);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createProduct(newProd));
    setNewProd({
      name: '',
      price: '',
      inventory: '',
      minimum_stock: '',
      category: '',
    });
  };

  return (
    <div className='main-page'>
      <Today />
      <PageTitle title='Add Product' />
      <button
        className='back'
        onClick={() => {
          history.push('/products');
        }}
      >
        Back
      </button>
      <form id='add-prod-form' onSubmit={handleSubmit}>
        {state.displayErrors.msg ? (
          <p className='error-message'>{state.displayErrors.msg}</p>
        ) : (
          <p className='error-message' style={{ display: 'none' }}>
            {state.displayErrors.msg}
          </p>
        )}
        <label>Product Name</label>
        <br />
        <input
          type='text'
          value={newProd.name}
          onChange={e => {
            // dispatch(clearErrors());
            setNewProd({ ...newProd, name: e.target.value });
          }}
          required
        />
        <br />
        <label>Inventory</label>
        <br />
        <input
          type='text'
          value={newProd.inventory}
          onChange={e => {
            setNewProd({ ...newProd, inventory: e.target.value });
          }}
          required
        />
        <br />
        <label>Price</label>
        <br />
        <input
          type='text'
          value={newProd.price}
          onChange={e => {
            setNewProd({ ...newProd, price: e.target.value });
          }}
          required
        />
        <br />
        <label>Minimum Stock</label>
        <br />
        <input
          type='text'
          value={newProd.minimum_stock}
          onChange={e => {
            setNewProd({ ...newProd, minimum_stock: e.target.value });
          }}
          required
        />
        <br />
        <label>Category</label>
        <br />
        <input
          type='text'
          value={newProd.category}
          onChange={e => {
            setNewProd({ ...newProd, category: e.target.value });
          }}
          required
        />
        <br />
        <button type='submit'>Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
