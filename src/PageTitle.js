import './PageTitle.css';
const PageTitle = props => {
  return (
    <div className='page-title'>
      <p>{props.title}</p>
      <div className='underline'></div>
    </div>
  );
};

export default PageTitle;
