import { useEffect, useState } from "react";
import ImageAnimation from "../ImageAnimation";
import { ImageAnimationVariant } from "../ImageAnimation/config";
import "./styles.css";
import useTimeoutClick from "../../utils/hooks/useTimeoutClick";

const ImagesButton = ({ images, className, onClick }) => {
  const [isInit, setIsInit] = useState(false);
  const { isStartWait, onTimeoutClick } = useTimeoutClick({
    timeout: 400,
    onExecute: onClick,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInit(true);
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`imgs-button-container ${
        isInit ? "show-button" : undefined
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
        />
        <div className="touch-area" onClick={onTimeoutClick} />
      </div>
    </div>
  );
};

export default ImagesButton;
