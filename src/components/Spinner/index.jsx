import { PuffLoader } from "react-spinners";
import "./styles.css";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <PuffLoader size={30} color="#a0a0a0" />
    </div>
  );
};

export default Spinner;
