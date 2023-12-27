import { ImageConfig } from "../../configs/images";
import useTimeoutClick from "../../utils/hooks/useTimeoutClick";
import useTimeoutInit from "../../utils/hooks/useTimeoutInit";
import ImageAnimation from "../ImageAnimation";
import { ImageAnimationVariant } from "../ImageAnimation/config";
import "./styles.css";

//variant: anim-1, anim-2
const Button = ({ children, onClick, className, variant = "anim-1" }) => {
  const { isInit } = useTimeoutInit(200);
  const { isStartWait, onTimeoutClick } = useTimeoutClick({
    timeout: 400,
    onExecute: onClick,
  });

  return (
    <div
      className={`${
        isStartWait
          ? variant === "anim-2"
            ? "click-anim-2"
            : "click-anim"
          : ""
      } ${isInit ? "show-button" : "invisible-button"} ${className}`}
    >
      <div className="nk-button-container">
        <ImageAnimation
          images={ImageConfig.Button4}
          variant={ImageAnimationVariant.ReverseAt}
          loopAt={25}
        />
        <button className={`nk-button `} onClick={onTimeoutClick}>
          {children}
        </button>
      </div>
    </div>
  );
};

export default Button;
