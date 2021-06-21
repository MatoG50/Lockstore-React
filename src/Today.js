import './Today.css';
const Today = () => {
  const today = new Date().toDateString();
  return (
    <div className='date'>
      <p>{today}</p>
    </div>
  );
};

export default Today;
