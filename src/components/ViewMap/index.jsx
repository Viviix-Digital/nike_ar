import mapImg from "../../assets/map.webp";
import { TargetId, Targets } from "../../configs/targets";
import Button from "../Button";
import ImageAnimation from "../ImageAnimation";
import { ImageAnimationVariant } from "../ImageAnimation/config";
import ScoreBox from "../ScoreBox";
import "./styles.css";

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
          {collectedTargets.map((targetId) => (
            <div key={targetId} className={getClassNameOfTarget(targetId)}>
              <ImageAnimation
                images={Targets.find((item) => item.Id === targetId).PiceImages}
                variant={ImageAnimationVariant.Loop}
              />
            </div>
          ))}
        </div>
        <Button className={"map-button"} onClick={onClick}>
          Tiếp tục
        </Button>
      </div>
      <ScoreBox score={`${collectedTargets.length}/7`} />
    </div>
  );
};

export default ViewMap;
