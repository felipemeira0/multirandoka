const TextInput = ({ placeholder }) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      style={{
        border: '3px solid #002104',
        borderRadius: '5px',
        padding: '10px',
        fontSize: '18px'
      }}
    >
    </input>
  );
};

export default TextInput;
