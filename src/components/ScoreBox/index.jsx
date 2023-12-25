import { useEffect, useState } from "react";
import "./styles.css";

const ScoreBox = ({ score }) => {
  const [oldScore, setOldScore] = useState();
  useEffect(() => {
    console.log(oldScore + " & " + score);
    if (oldScore) return;
    console.log("setScore");
    setOldScore(score);
  }, [oldScore, score]);
  return (
    <div
      className={`score-box ${
        oldScore && oldScore !== score ? "add-score-anim" : ""
      }`}
    >
      {score}
    </div>
  );
};

export default ScoreBox;
