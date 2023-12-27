import useRemoveMindAR from "../../utils/hooks/useRemoveMindAR";
import "./styles.css";

const NotSupportLandscape = () => {
  useRemoveMindAR();
  return (
    <div className="not-support">
      Vui lòng dùng điện thoại hoặc xoay màn hình theo chiều dọc.
    </div>
  );
};

export default NotSupportLandscape;
