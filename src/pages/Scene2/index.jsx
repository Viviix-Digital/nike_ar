import { useNavigate } from "react-router-dom";
import "./styles.css";
import RouteConfig from "../../configs/route";
import ImageAnimation from "../../components/ImageAnimation";
import { ImageAnimationVariant } from "../../components/ImageAnimation/config";
import { ImageConfig } from "../../configs/images";
import FullContainer from "../../components/FullContainer";
import useRemoveMindAR from "../../utils/hooks/useRemoveMindAR";
import useWaitFinish from "../../utils/hooks/useWaitFinish";
import FixedBottomNextButton from "../../components/FixedBottomNextButton";

const Scene2 = () => {
  const navigate = useNavigate();
  const { isFinish, onFinish } = useWaitFinish();

  useRemoveMindAR();

  const handleOnClick = () => {
    navigate(RouteConfig.AR.path);
  };

  return (
    <FullContainer>
      <ImageAnimation
        images={ImageConfig.Guide}
        variant={ImageAnimationVariant.Once}
        reverseAt={150}
        onFinish={onFinish}
      />
      <FixedBottomNextButton
        images={ImageConfig.Button1}
        onClick={handleOnClick}
        isStart={isFinish}
      />
    </FullContainer>
  );
};

export default Scene2;
