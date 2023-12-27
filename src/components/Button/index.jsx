import useTimeoutClick from "../../utils/hooks/useTimeoutClick";
import "./styles.css";

//variant: anim-1, anim-2
const Button = ({ children, onClick, className, variant = "anim-1" }) => {
  const { isStartWait, onTimeoutClick } = useTimeoutClick({
    timeout: 400,
    onExecute: onClick,
  });

  return (
    <button
      className={`nk-button ${
        isStartWait
          ? variant === "anim-2"
            ? "click-anim-2"
            : "click-anim"
          : undefined
      } ${className}`}
      onClick={onTimeoutClick}
    >
      {children}
    </button>
  );
};

export default Button;
