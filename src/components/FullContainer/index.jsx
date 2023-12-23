import "./styles.css";

const FullContainer = ({ children, ...progs }) => {
  return (
    <div className="full-container" {...progs}>
      {children}
    </div>
  );
};

export default FullContainer;
