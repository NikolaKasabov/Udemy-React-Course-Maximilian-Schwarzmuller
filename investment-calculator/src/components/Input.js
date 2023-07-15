function Input({type, name, label, value, onChange}) {
  return (
    <p>
      <label htmlFor={name}>{label}</label>
      <input name={name} type={type} id={name} value={value} onChange={onChange} />
    </p>
  );
}

export default Input;
