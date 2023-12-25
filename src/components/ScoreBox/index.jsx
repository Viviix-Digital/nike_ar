import { useEffect, useState } from "react";
import "./styles.css";

const ScoreBox = ({ score, onClick }) => {
  const [oldScore, setOldScore] = useState();

  useEffect(() => {
    if (oldScore) return;
    setOldScore(score);
  }, [oldScore, score]);

  return (
    <div
      className={`score-box ${
        oldScore && oldScore !== score ? "add-score-anim" : ""
      }`}
      onClick={onClick}
    >
      {score}
    </div>
  );
};

export default ScoreBox;
