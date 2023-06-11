const StatisticsValue = ({ text, value }) => {
  return (
    <>
      <span>{text}</span>
      <div className='dashvalue'>{value}</div>
    </>
  );
};

export default StatisticsValue;
