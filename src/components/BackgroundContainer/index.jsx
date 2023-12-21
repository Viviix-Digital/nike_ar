import "./styles.css";

// variant: scene-1 | scene-2
const BackgroundContainer = ({ children, variant = "scene-1" }) => {
  return (
    <div
      className={`background-container ${
        variant == "scene-2" && "background-container-scene-2"
      }`}
    >
      {children}
    </div>
  );
};

export default BackgroundContainer;
