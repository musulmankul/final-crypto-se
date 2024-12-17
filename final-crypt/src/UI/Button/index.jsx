import "../Button/index.css";

function Button(props) {
  const {
    size = "md",
    variant = "primary",
    type = "button",
    onClick,
    disabled = false,
    children,
  } = props;
  const className = `my-button my-button--${variant} my-button--${size} my-button--${type} my-button--${disabled}`;

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
