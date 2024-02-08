import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";
import "../framer.css";
import FramerHeader from "./FramerHeader";

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: 5,
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const FramerAnimatioin = () => {
  return (
    <>
      <FramerHeader />
      <motion.div
        className="home container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2>Welcome to Tasmin Ansari</h2>
        <Link to="/base">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            style={{
              background:
                "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
              color: "white",
              padding: "30px",
              fontSize: "1.5rem",
              width: "15%",
              textAlign: "center",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Create Your Pizza
          </motion.button>
        </Link>
        <Loader />
      </motion.div>
    </>
  );
};

export default FramerAnimatioin;
