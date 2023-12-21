import "./styles.css";

const Button = ({ children, onClick, className }) => {
  return (
    <button className={`nk-button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
