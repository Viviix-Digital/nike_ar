import mapImg from "../../assets/map.webp";
import { ImageConfig } from "../../configs/images";
import Button from "../Button";
import ImageAnimation from "../ImageAnimation";
import { ImageAnimationVariant } from "../ImageAnimation/config";
import ScoreBox from "../ScoreBox";
import "./styles.css";

const ViewMap = ({ collectedTargets }) => {
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
          <ImageAnimation
            className="target-img-on-map"
            images={ImageConfig.Nike1}
            variant={ImageAnimationVariant.Loop}
          />
        </div>
        <Button className={"map-button"}>Tiếp tục</Button>
      </div>
      <ScoreBox score={`${collectedTargets.length}/7`} />
    </div>
  );
};

export default ViewMap;
