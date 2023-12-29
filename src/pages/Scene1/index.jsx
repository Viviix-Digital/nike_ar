import { useNavigate } from "react-router-dom";
import "./styles.css";
import RouteConfig from "../../configs/route";
import ImageAnimation from "../../components/ImageAnimation";
import { ImageConfig } from "../../configs/images";
import { ImageAnimationVariant } from "../../components/ImageAnimation/config";
import FullContainer from "../../components/FullContainer";
import useRemoveMindAR from "../../utils/hooks/useRemoveMindAR";
import useWaitFinish from "../../utils/hooks/useWaitFinish";
import ImagesButton from "../../components/ImagesButton";

const Scene1 = () => {
  const navigate = useNavigate();
  const { isFinish, onFinish } = useWaitFinish();
  useRemoveMindAR();

  const handleOnClick = () => {
    navigate(RouteConfig.Guide.path);
  };

  return (
    <FullContainer>
      <ImageAnimation
        images={ImageConfig.Home}
        variant={ImageAnimationVariant.ReverseAt}
        reverseAt={90}
        onFinish={onFinish}
      />
      <ImagesButton
        className={`s1-button`}
        images={ImageConfig.Button1}
        onClick={handleOnClick}
        isStart={isFinish}
      />
    </FullContainer>
  );
};

export default Scene1;
