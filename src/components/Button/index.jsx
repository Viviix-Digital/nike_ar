import { useState } from "react";
import { ImageConfig } from "../../configs/images";
import useTimeoutClick from "../../utils/hooks/useTimeoutClick";
import ImageAnimation from "../ImageAnimation";
import { ImageAnimationVariant } from "../ImageAnimation/config";
import "./styles.css";

//variant: anim-1, anim-2
const Button = ({
  isStart = true,
  children,
  onClick,
  className,
  variant = "anim-1",
}) => {
  const [isInit, setIsInit] = useState(false);
  const { isStartWait, onTimeoutClick } = useTimeoutClick({
    timeout: 400,
    onExecute: onClick,
  });

  const handleOnLoaded = () => {
    setIsInit(true);
  };

  return (
    <div
      className={`${
        isStartWait
          ? variant === "anim-2"
            ? "click-anim-2"
            : "click-anim"
          : ""
      } ${isInit && isStart ? "show-button" : "invisible-button"} ${className}`}
    >
      <div className="nk-button-container">
        <ImageAnimation
          images={ImageConfig.Button4}
          variant={ImageAnimationVariant.ReverseAt}
          loopAt={25}
          onLoaded={handleOnLoaded}
        />
        <button className={`nk-button `} onClick={onTimeoutClick}>
          {children}
        </button>
      </div>
    </div>
  );
};

export default Button;
