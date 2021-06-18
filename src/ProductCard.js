import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ProductCard.css';
const ProductCard = () => {
  const product = useSelector(
    state => state.displayProducts.products?.Products
  );
  const productList =
    product &&
    product.map((prod, id) => {
      return (
        <div className='product-card' key={id}>
          <Link to={`/products/${id}`}>
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
