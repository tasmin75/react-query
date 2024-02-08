import { useState } from "react";
import { initialTabs as tabs } from "../components/ingredients";
import { motion, AnimatePresence } from "framer-motion";
//import "../styles.css";
import "../animation.css";

interface Tab {
  label: string;
  icon: any;
}

const AnimationTwo = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0]);

  return (
    <div
      style={{
        background:
          " background: linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%);",
        color: "white",
      }}
    >
      {/* <div className="example-container">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
      </div> */}
      <div className="window">
        <nav>
          <ul>
            {tabs.map((item: Tab) => (
              <li
                key={item.label}
                className={item === selectedTab ? "selected" : ""}
                onClick={() => setSelectedTab(item)}
              >
                {`${item.icon} ${item.label}`}
                {item === selectedTab ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab ? selectedTab.icon : "😋"}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default AnimationTwo;
