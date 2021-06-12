import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Date from './Date';
import PageTitle from './PageTitle';
import { fetchSales } from './redux/actions/lockstoreActions';
import './Sales.css';
import SalesTableRow from './SalesTableRow';

const Sales = () => {
  const sale = useSelector(state => state.displaySales.sales?.Sales);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSales());
  }, []);
  console.log('Sales: ', sale);

  return (
    <div className='main-page'>
      <Date />
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
