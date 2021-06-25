import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProduct, updateProduct } from './redux/actions/lockstoreActions';
import './UpdateProduct.css';
const UpdateProduct = ({ closeModal }) => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.showProduct.product?.product);
  const [editProd, setEditProd] = useState({
    name: product.name,
    price: product.price,
    inventory: product.inventory,
    minimum_stock: product.minimum_stock,
    category: product.category,
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateProduct(productId, editProd));
    setEditProd({
      name: '',
      price: '',
      inventory: '',
      minimum_stock: '',
      category: '',
    });
    dispatch(fetchProduct(productId));
    setTimeout(() => closeModal(false), 3000)
  };

  return (
    <div className='modal-background'>
      <div className='update-modal'>
        <form id='update-prod' onSubmit={handleSubmit}>
          {/* {state.displayErrors.msg ? (
            <p className='error-message'>{state.displayErrors.msg}</p>
          ) : (
            <p className='error-message' style={{ display: 'none' }}>
              {state.displayErrors.msg}
            </p>
          )} */}
          <label>Product Name</label>
          <br />
          <input
            type='text'
            value={editProd.name}
            onChange={e => {
              setEditProd({ ...editProd, name: e.target.value });
            }}
            required
          />
          <br />
          <label>Inventory</label>
          <br />
          <input
            type='text'
            value={editProd.inventory}
            onChange={e => {
              setEditProd({ ...editProd, inventory: e.target.value });
            }}
            required
          />
          <br />
          <label>Price</label>
          <br />
          <input
            type='text'
            value={editProd.price}
            onChange={e => {
              setEditProd({ ...editProd, price: e.target.value });
            }}
            required
          />
          <br />
          <label>Minimum Stock</label>
          <br />
          <input
            type='text'
            value={editProd.minimum_stock}
            onChange={e => {
              setEditProd({ ...editProd, minimum_stock: e.target.value });
            }}
            required
          />
          <br />
          <label>Category</label>
          <br />
          <input
            type='text'
            value={editProd.category}
            onChange={e => {
              setEditProd({ ...editProd, category: e.target.value });
            }}
            required
          />
          <br />
          <button type='submit'>Update Product</button>
          <button
            className='close-modal'
            onClick={() => {
              closeModal(false);
            }}
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
