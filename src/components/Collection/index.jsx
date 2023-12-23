import ImageAnimation from "../ImageAnimation";
import "./styles.css";
import Button from "../Button";
import { ImageAnimationVariant } from "../ImageAnimation/config";
import { useEffect, useState } from "react";
import ScoreBox from "../ScoreBox/iindex";

const Collection = ({
  targetId,
  score,
  images,
  onCollect,
  isCollected,
  setIsCollected,
}) => {
  const [isClickedCollect, setIsClickedCollect] = useState(false);

  useEffect(() => {
    if (!isClickedCollect) return;
    if (isCollected) return;

    const timer = setTimeout(() => {
      setIsCollected(true);
      onCollect(targetId);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [isClickedCollect, isCollected, onCollect, setIsCollected, targetId]);

  const handleOnClick = () => {
    setIsClickedCollect(true);
  };

  return (
    <div className="collection-container">
      <ImageAnimation
        className={isClickedCollect && "move-to-top-right"}
        images={images}
        variant={ImageAnimationVariant.Loop}
      />
      {!isClickedCollect && (
        <Button className={"collect-button"} onClick={handleOnClick}>
          Thu thập
        </Button>
      )}
      <ScoreBox score={score} />
    </div>
  );
};

export default Collection;
