import { motion, AnimatePresence } from "framer-motion";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Modal = ({ showModal, setShowModal }) => {
  const { title, image, ingredients } = showModal[1];

  return (
    <AnimatePresence>
      {showModal[0] && (
        <motion.div
          className="backdrop fixed bg-white/40 top-0 left-0 w-screen h-screen flex items-center justify-center z-10"
          onClick={() => setShowModal([false, {}])}
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="bg-[#b61e1f] h-1/2 w-2/4 rounded-3xl flex items-center p-5 shadow-2xl text-[#f2f2f0] relative overflow-scroll">
            <motion.button onClick={() => setShowModal([false, {}])}>
              <XMarkIcon
                width={40}
                height={40}
                className="absolute top-2 right-2"
              />
            </motion.button>

            <img src={image} alt="recipe image" className="rounded-3xl w-1/2" />
            <div className="ml-7 w-full relative">
              <h3 className="text-lg font-bold absolute -top-14">{title}</h3>
              <div>
                {typeof ingredients === "object" ? (
                  Object.keys(ingredients).map((key, index) =>
                    ingredients[key].map(({ original }, index) => (
                      <motion.p key={index} className="text-sm">
                        {original}
                      </motion.p>
                    ))
                  )
                ) : (
                  <p>{ingredients}</p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
