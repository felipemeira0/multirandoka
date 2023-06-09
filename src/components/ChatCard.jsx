const ChatCard = () => {
  return (
    <div style={{
      backgroundColor: '#fff',
      height: '100px',
      margin: '3px 0px',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <div style={{ background: '#ccc', width: '90%', margin: '10px' }}>
        Teste Aqui
      </div>
      <div style={{
        width: '100px',
        height: '100px',
        borderRadius: '100%',
        backgroundColor: '#ccc',
        display: 'inline-block'
      }}></div>
    </div>
  );
};

export default ChatCard;
