import { AnimatePresence, motion } from "framer-motion";

const PopUpCard = ({ recipe }) => {
  console.log("inside pop up component: ", recipe);
  return (
    <AnimatePresence>
      <motion.div className="flex items-center bg-red-400 rounded-lg shadow-lg w-96 py-2 absolute translate-x-5 -translate-y-3 z-10 ">
        <motion.div className="px-2 flex">
          <motion.img
            src={recipe.image}
            alt="recipe image"
            className="w-20 h-20 object-cover rounded-xl"
          />
          <motion.div className="p-2">
            <motion.h2 className="text-xs font-bold mb-2">
              {recipe.title}
            </motion.h2>
            <motion.p className="text-xs">{recipe.ingredients}</motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PopUpCard;
