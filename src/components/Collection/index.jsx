import ImageAnimation from "../ImageAnimation";
import "./styles.css";
import Button from "../Button";
import { ImageAnimationVariant } from "../ImageAnimation/config";
import { useEffect, useState } from "react";
import ScoreBox from "../ScoreBox";

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
      <div className={`${isClickedCollect ? "move-to-top-right" : ""}`}>
        <ImageAnimation images={images} variant={ImageAnimationVariant.Loop} />
      </div>
      <div className={`collect-button`}>
        <Button onClick={handleOnClick}>Thu thập</Button>
      </div>
      <ScoreBox score={score} />
    </div>
  );
};

export default Collection;
