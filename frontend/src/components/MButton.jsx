const MButton = ({ text, secondary }) => {
  return (
    <>
      {secondary ? (
        <button style={{
          backgroundColor: '#ccc',
          color: '#002104',
          padding: '15px',
          margin: '0px 10px',
          borderRadius: '5px'
        }}>
          {text}
        </button >
      ) : (
        <button style={{
          backgroundColor: '#002104',
          color: '#ffffff',
          padding: '15px',
          margin: '0px 10px',
          borderRadius: '5px'
        }}>
          {text}
        </button >
      )}
    </>
  );
};

export default MButton;
