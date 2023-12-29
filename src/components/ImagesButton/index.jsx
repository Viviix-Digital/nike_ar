import ImageAnimation from "../ImageAnimation";
import { ImageAnimationVariant } from "../ImageAnimation/config";
import "./styles.css";
import useTimeoutClick from "../../utils/hooks/useTimeoutClick";
import { useState } from "react";

const ImagesButton = ({ isStart, images, className, onClick, loopAt }) => {
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
      className={`imgs-button-container ${
        isInit && isStart ? "show-button" : "invisible-button"
      } ${className}`}
    >
      <div
        className={`imgs-button-content ${
          isStartWait ? "click-anim" : undefined
        }`}
      >
        <ImageAnimation
          images={images}
          variant={ImageAnimationVariant.Reverse}
          loopAt={loopAt}
          onLoaded={handleOnLoaded}
        />
        <div className="touch-area" onClick={onTimeoutClick} />
      </div>
    </div>
  );
};

export default ImagesButton;
