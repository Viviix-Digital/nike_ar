import mapImg from "../../assets/map.webp";
import { TargetId, Targets } from "../../configs/targets";
import Button from "../Button";
import ImageAnimation from "../ImageAnimation";
import { ImageAnimationVariant } from "../ImageAnimation/config";
import ScoreBox from "../ScoreBox";
import "./styles.css";
import grayMap1 from "../../assets/map_1.webp";
import grayMap2 from "../../assets/map_2.webp";
import grayMap3 from "../../assets/map_3.webp";
import grayMap4 from "../../assets/map_4.webp";
import grayMap5 from "../../assets/map_5.webp";
import grayMap6 from "../../assets/map_6.webp";

const ViewMap = ({ collectedTargets, onClick }) => {
  const getClassNameOfTarget = (targetId) => {
    switch (targetId) {
      case TargetId.One:
        return "target1-on-map";
      case TargetId.Two:
        return "target2-on-map";
      case TargetId.Three:
        return "target3-on-map";
      case TargetId.Four:
        return "target4-on-map";
      case TargetId.Five:
        return "target5-on-map";
      case TargetId.Six:
        return "target6-on-map";
      case TargetId.Seven:
        return "target7-on-map";
    }
  };

  return (
    <div className="map-container">
      <div className="map-content">
        <div className="map-description">
          {`BẠN ĐÃ THU THẬP ĐƯỢC ${collectedTargets.length}/7 MẢNH GHÉP`}
          <br />
          {`HÃY HOÀN THÀNH ĐỦ 7/7 MẢNH GHÉP ĐỂ NHẬN QUÀ NHÉ!`}
        </div>
        <div className="map-img-container">
          <img className="map-img" src={mapImg} />
          {collectedTargets.findIndex((item) => item === TargetId.One) ===
            -1 && <img className="gray-img" src={grayMap1} />}
          {collectedTargets.findIndex((item) => item === TargetId.Two) ===
            -1 && <img className="gray-img" src={grayMap2} />}
          {collectedTargets.findIndex((item) => item === TargetId.Three) ===
            -1 && <img className="gray-img" src={grayMap3} />}
          {collectedTargets.findIndex((item) => item === TargetId.Four) ===
            -1 && <img className="gray-img" src={grayMap4} />}
          {collectedTargets.findIndex((item) => item === TargetId.Five) ===
            -1 && <img className="gray-img" src={grayMap5} />}
          {collectedTargets.findIndex((item) => item === TargetId.Six) ===
            -1 && <img className="gray-img" src={grayMap6} />}

          {collectedTargets.map((targetId) => (
            <div key={targetId} className={getClassNameOfTarget(targetId)}>
              <ImageAnimation
                images={
                  Targets.find((item) => item.Id === targetId)?.PiceImages || []
                }
                variant={ImageAnimationVariant.Loop}
              />
            </div>
          ))}
        </div>
        <div>
          <div className="map-button-container">
            <Button className={"map-button"} onClick={onClick}>
              Tiếp tục
            </Button>
          </div>
        </div>
      </div>
      <ScoreBox score={`${collectedTargets.length}/7`} />
    </div>
  );
};

export default ViewMap;
