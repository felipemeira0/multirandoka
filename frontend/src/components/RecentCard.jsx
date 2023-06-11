const RecentCard = () => {
  return (
    <div style={{
      boxShadow: '0 0 10px #ccc',
      width: '100%',
      margin: '10px 0px',
      display: 'flex',
      justifyContent: 'space-between',
      height: '100px'
    }} >
      <div style={{ fontWeight: '700', fontSize: '24px', padding: '10px' }}>
        Teste
      </div>
      <div style={{ width: '50%', backgroundColor: '#ccc' }}></div>
    </div>
  );
};

export default RecentCard;
