import { useNavigate } from "react-router-dom";
import ImageAnimation from "../../components/ImageAnimation";
import { ImageAnimationVariant } from "../../components/ImageAnimation/config";
import { ImageConfig } from "../../configs/images";
import RouteConfig from "../../configs/route";
import FullContainer from "../../components/FullContainer";
import useWaitFinish from "../../utils/hooks/useWaitFinish";
import ImagesButton from "../../components/ImagesButton";
import "./styles.css";

const Completed = () => {
  const navigate = useNavigate();
  const { isFinish, onFinish } = useWaitFinish();

  const handleOnClick = () => {
    navigate(RouteConfig.Congratulations.path);
  };
  return (
    <FullContainer>
      <ImageAnimation
        images={ImageConfig.Completed}
        variant={ImageAnimationVariant.ReverseAt}
        reverseAt={107}
        onFinish={onFinish}
      />
      {isFinish && (
        <ImagesButton
          className="complete-button"
          images={ImageConfig.Button2}
          onClick={handleOnClick}
        />
      )}
    </FullContainer>
  );
};

export default Completed;
