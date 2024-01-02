import FullContainer from "../../components/FullContainer";
import ImageAnimation from "../../components/ImageAnimation";
import { ImageAnimationVariant } from "../../components/ImageAnimation/config";
import { ImageConfig } from "../../configs/images";
import ImagesButton from "../../components/ImagesButton";
import useWaitFinish from "../../utils/hooks/useWaitFinish";
import "./styles.css";
import useRemoveMindAR from "../../utils/hooks/useRemoveMindAR";
import useCollectedTargets from "../../utils/hooks/useCollectedTargets";

const Congratulations = () => {
  useRemoveMindAR();
  const { clearCollectedTargets } = useCollectedTargets();
  const { isFinish, onFinish } = useWaitFinish();

  const handleOnClick = () => {
    clearCollectedTargets();
    window.location.href = "https://landingpage.acfc.com.vn/survey/nike";
  };

  return (
    <FullContainer>
      <ImageAnimation
        images={ImageConfig.Congratulations}
        variant={ImageAnimationVariant.Once}
        // reverseAt={117}
        onFinish={onFinish}
      />
      <ImagesButton
        className="receive-button"
        images={ImageConfig.Button3}
        onClick={handleOnClick}
        isStart={isFinish}
      />
    </FullContainer>
  );
};
export default Congratulations;
