const Box = {
  backgroundColor: '#002104',
  margin: '5px',
  padding: '10px',
  color: '#fff',
  width: 'auto',
  borderRadius: '5px'
};

const ApartmentCard = () => {
  return (
    <div style={{
      boxShadow: '0 0 10px #ccc',
      width: '98%',
      margin: '10px 10px',
      display: 'flex',
      height: '250px'
    }} >
      <div style={{ width: '250px', backgroundColor: '#ccc' }}></div>
      <div style={{ margin: '0px 10px' }}>
        <h2>Teste</h2>
        <p>Nome do Rua...</p>
        <div style={{ display: 'flex' }}>
          <div style={Box}>1</div>
          <div style={Box}>1.33</div>
          <div style={Box}>1.26</div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
