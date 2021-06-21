import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PageTitle from './PageTitle';
import { fetchSales } from './redux/actions/lockstoreActions';
import './Sales.css';
import SalesTableRow from './SalesTableRow';
import Today from './Today';

const Sales = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSales());
  }, []);

  return (
    <div className='main-page'>
      <Today />
      <PageTitle title='Sales' />
      <table id='sales-table'>
        <tbody>
          <tr className='table-header'>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sold By</th>
          </tr>
        </tbody>
        <SalesTableRow />
      </table>
    </div>
  );
};

export default Sales;
