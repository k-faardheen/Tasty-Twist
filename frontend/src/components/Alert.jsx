import { motion, AnimatePresence } from "framer-motion";

const alertVariants = {
  hidden: {
    y: "-100vw",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};
const Alert = ({ showAlert, setShowAlert, icon, text }) => {
  return (
    <AnimatePresence>
      {showAlert && (
        <motion.div className=" fixed top-0 left-0 w-screen h-1/4 flex justify-center z-10">
          <motion.div
            className="w-1/5 bg-white/70 shadow-2xl m-12 rounded-3xl flex items-center justify-center flex-col"
            variants={alertVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div>{icon}</div>
            <span className=" text-sm font-bold">{text}</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;
