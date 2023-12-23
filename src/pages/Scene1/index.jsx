import { useNavigate } from "react-router-dom";
import "./styles.css";
import RouteConfig from "../../configs/route";
import ImageAnimation from "../../components/ImageAnimation";
import { ImageConfig } from "../../configs/images";
import { ImageAnimationVariant } from "../../components/ImageAnimation/config";
import FullContainer from "../../components/FullContainer";

const Scene1 = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(RouteConfig.Guide.path);
  };
  return (
    <FullContainer onClick={handleOnClick}>
      <ImageAnimation
        images={ImageConfig.Home}
        variant={ImageAnimationVariant.Reverse}
      />
    </FullContainer>
  );
};

export default Scene1;
