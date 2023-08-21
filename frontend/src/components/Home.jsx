import UserInput from "./UserInput";
import Display from "./Display";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadingVariants = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: -50,
    transition: {
      type: "spring",
      stiffness: 120,
      when: "beforeChildren",
    },
  },
};

const loaderVariants = {
  animation: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeatType: "mirror",
        repeat: Infinity,
        duration: 0.5,
      },
      y: {
        repeatType: "mirror",
        repeat: Infinity,
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  },
};

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetched, hasFetched] = useState(false);

  console.log("Recipes: ", recipes);
  return (
    <div className="home flex mt-14">
      <UserInput
        setIsLoading={setIsLoading}
        setRecipes={setRecipes}
        hasFetched={hasFetched}
      />
      <AnimatePresence>
        {!isLoading ? (
          <Display recipes={recipes} fetched={fetched} isLoading={isLoading} />
        ) : (
          <motion.div
            className="flex items-center justify-center text-lg font-semibold w-1/2 flex-col"
            variants={loadingVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="bg-[#b61e1f] h-3 w-3 rounded-full"
              variants={loaderVariants}
              animate="animation"
            ></motion.div>
            <motion.p>Loading...</motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
