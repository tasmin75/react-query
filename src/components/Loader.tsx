import { motion, useCycle } from "framer-motion";
import "../framer.css";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");

  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      ></motion.div>
      <div
        onClick={() => cycleAnimation()}
        style={{
          cursor: "pointer",
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "black",
          color: "white",
          display: "inline-block",
          marginTop: "20px",
        }}
      >
        Change Loader
      </div>
    </>
  );
};

export default Loader;
