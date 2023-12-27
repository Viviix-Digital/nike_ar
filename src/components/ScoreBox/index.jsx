import { useEffect, useState } from "react";
import "./styles.css";
import ImageAnimation from "../ImageAnimation";
import { ImageConfig } from "../../configs/images";
import { ImageAnimationVariant } from "../ImageAnimation/config";

const ScoreBox = ({ score, onClick }) => {
  const [oldScore, setOldScore] = useState();
  const [isNewScore, setIsNewScore] = useState(false);

  useEffect(() => {
    if (oldScore) return;
    setOldScore(score);
  }, [oldScore, score]);

  useEffect(() => {
    if (!oldScore) return;
    if (oldScore !== score) {
      setIsNewScore(true);
    }
  }, [oldScore, score]);

  return (
    <div
      className={`score-box ${isNewScore ? "add-score-anim" : ""}`}
      onClick={onClick}
    >
      <div className="score-content">{score}</div>
      {isNewScore && (
        <div className="score-effect">
          <ImageAnimation
            images={ImageConfig.ScoreEffect}
            variant={ImageAnimationVariant.Loop}
          />
        </div>
      )}
    </div>
  );
};

export default ScoreBox;
