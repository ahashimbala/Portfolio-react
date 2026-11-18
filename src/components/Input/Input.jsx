import "./Input.css";

const Input = ({label, type="text", placeholder, value, onChange, error, disabled=false,id}) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>

      <input id={id} type={type} placeholder={placeholder} value={value} onChange={(event) => onChange(event.target.value)} disabled={disabled} aria-invalid={Boolean(error)}/>

      {error && <p className="input-error">{error}</p>}
    </div>
  )
}

export default Input
