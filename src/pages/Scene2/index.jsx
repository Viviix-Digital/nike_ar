import { useNavigate } from "react-router-dom";
import "./styles.css";
import RouteConfig from "../../configs/route";
import ImageAnimation from "../../components/ImageAnimation";
import { ImageAnimationVariant } from "../../components/ImageAnimation/config";
import { ImageConfig } from "../../configs/images";
import FullContainer from "../../components/FullContainer";

const Scene2 = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(RouteConfig.AR.path);
  };
  return (
    <FullContainer onClick={handleOnClick}>
      <ImageAnimation
        images={ImageConfig.Guide}
        variant={ImageAnimationVariant.Reverse}
      />
    </FullContainer>
  );
};

export default Scene2;
