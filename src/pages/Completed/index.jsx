import { useNavigate } from "react-router-dom";
import ImageAnimation from "../../components/ImageAnimation";
import { ImageAnimationVariant } from "../../components/ImageAnimation/config";
import { ImageConfig } from "../../configs/images";
import RouteConfig from "../../configs/route";
import FullContainer from "../../components/FullContainer";

const Completed = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(RouteConfig.Congratulations.path);
  };
  return (
    <FullContainer onClick={handleOnClick}>
      <ImageAnimation
        images={ImageConfig.Completed}
        variant={ImageAnimationVariant.Reverse}
      />
    </FullContainer>
  );
};

export default Completed;
