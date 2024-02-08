import Example from "../components/Example";
import "../styles.css";

const AnimationOne = () => {
  return (
    <div
      style={{
        //justifyContent: "center",
        height: "100vh",
        background:
          " background: linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%);",
        color: "white",
      }}
    >
      <Example />
    </div>
  );
};

export default AnimationOne;
