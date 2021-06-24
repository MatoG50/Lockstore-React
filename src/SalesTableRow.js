import { useSelector } from 'react-redux';

const SalesTableRow = () => {
  const sale = useSelector(state => state.displaySales.sales?.Sales);
  const salesList =
    sale &&
    sale.map(sal => {
      const { attendant_name, quantity, product_name, total_price } = sal;
      return (
        <tbody key={sal['sale id']}>
          <tr className='table-rows'>
            <td>{product_name}</td>
            <td>{total_price}</td>
            <td>{quantity}</td>
            <td>{attendant_name}</td>
          </tr>
        </tbody>
      );
    });

  return !salesList ? (
    <tbody>
      <tr>
        <td className='loading'>Loading sales...</td>
      </tr>
    </tbody>
  ) : (
    salesList
  );
};

export default SalesTableRow;
