import { useNavigate } from "react-router-dom";
import "./styles.css";
import RouteConfig from "../../configs/route";
import ImageAnimation from "../../components/ImageAnimation";
import { ImageAnimationVariant } from "../../components/ImageAnimation/config";
import { ImageConfig } from "../../configs/images";
import FullContainer from "../../components/FullContainer";
import useRemoveMindAR from "../../utils/hooks/useRemoveMindAR";
import useWaitFinish from "../../utils/hooks/useWaitFinish";
import ImagesButton from "../../components/ImagesButton";

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
        variant={ImageAnimationVariant.ReverseAt}
        reverseAt={150}
        onFinish={onFinish}
      />
      {isFinish && (
        <ImagesButton
          className="s2-button"
          images={ImageConfig.Button1}
          onClick={handleOnClick}
        />
      )}
    </FullContainer>
  );
};

export default Scene2;
