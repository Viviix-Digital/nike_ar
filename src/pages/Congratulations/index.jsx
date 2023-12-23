import { useNavigate } from "react-router-dom";
import FullContainer from "../../components/FullContainer";
import ImageAnimation from "../../components/ImageAnimation";
import { ImageAnimationVariant } from "../../components/ImageAnimation/config";
import { ImageConfig } from "../../configs/images";
import RouteConfig from "../../configs/route";

const Congratulations = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(RouteConfig.Home.path);
  };

  return (
    <FullContainer onClick={handleOnClick}>
      <ImageAnimation
        images={ImageConfig.Congratulations}
        variant={ImageAnimationVariant.Reverse}
      />
    </FullContainer>
  );
};
export default Congratulations;
