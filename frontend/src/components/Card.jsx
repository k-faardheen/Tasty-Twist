import { useState } from "react";
import PopUpCard from "./PopUpCard";
import { motion } from "framer-motion";

const Card = ({
  recipe,
  index,
  id,
  innerRef,
  draggableProps,
  dragHandleProps,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white rounded-md space-y-2 drop-shadow-md my-2"
        ref={innerRef}
        {...draggableProps}
        {...dragHandleProps}
      >
        <motion.div className="flex items-center px-2 py-1">
          <motion.img
            src={recipe.image}
            alt="recipe image"
            className=" w-20 h-20 object-cover rounded-xl"
          />
          <motion.h2 className="text-xs font-bold pl-2">
            {recipe.title}
          </motion.h2>
        </motion.div>
        {console.log(isOpen)}
      </motion.div>
      {isOpen && <PopUpCard recipe={recipe} />}
    </>
  );
};

export default Card;
