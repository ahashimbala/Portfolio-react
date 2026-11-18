import "./Button.css";

const Button = ({ children, variant ="primary", onClick, disabled = false, loading = false}) => {
  return (
    <button
      className={`button button-${variant}`}
      onClick={onClick}
      disabled={disabled || loading}>
        {loading ? "Loading..." : children}
    </button>
  )
}

export default Button;
