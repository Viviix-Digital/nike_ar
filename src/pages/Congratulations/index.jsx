import { useNavigate } from "react-router-dom";
import FullContainer from "../../components/FullContainer";
import ImageAnimation from "../../components/ImageAnimation";
import { ImageAnimationVariant } from "../../components/ImageAnimation/config";
import { ImageConfig } from "../../configs/images";
import RouteConfig from "../../configs/route";
import ImagesButton from "../../components/ImagesButton";
import useWaitFinish from "../../utils/hooks/useWaitFinish";
import "./styles.css";

const Congratulations = () => {
  const navigate = useNavigate();
  const { isFinish, onFinish } = useWaitFinish();

  const handleOnClick = () => {
    navigate(RouteConfig.Home.path);
  };

  return (
    <FullContainer>
      <ImageAnimation
        images={ImageConfig.Congratulations}
        variant={ImageAnimationVariant.ReverseAt}
        reverseAt={117}
        onFinish={onFinish}
      />
      {isFinish && (
        <ImagesButton
          className="receive-button"
          images={ImageConfig.Button3}
          onClick={handleOnClick}
        />
      )}
    </FullContainer>
  );
};
export default Congratulations;
