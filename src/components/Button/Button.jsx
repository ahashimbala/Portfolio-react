import "./Button.css";

const Button = ({ children, variant = "primary", onClick, disabled = false, loading = false, type = "button" }) => (
  <button className={`button button-${variant}`} type={type} onClick={onClick} disabled={disabled || loading}>
    {loading ? "Loading..." : children}
  </button>
);
export default Button;
