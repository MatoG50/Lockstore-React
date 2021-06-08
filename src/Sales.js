import Date from './Date';
import PageTitle from './PageTitle';
import './Sales.css';
const Sales = () => {
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
        <tbody>
          <tr className='table-rows'>
            <td>Nike Nemesis</td>
            <td>20000</td>
            <td>20</td>
            <td>C.Mangeli</td>
          </tr>
        </tbody>
        <tbody>
          <tr className='table-rows'>
            <td>Nike Nemesis</td>
            <td>20000</td>
            <td>20</td>
            <td>C.Mangeli</td>
          </tr>
        </tbody>
        <tbody>
          <tr className='table-rows'>
            <td>Nike Nemesis</td>
            <td>20000</td>
            <td>20</td>
            <td>C.Mangeli</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Sales;
