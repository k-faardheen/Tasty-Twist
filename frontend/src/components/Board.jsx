import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import XCircleIcon from "@heroicons/react/24/outline/XCircleIcon";
import logo from "../assets/avatar.png";
import Column from "./Column";
import Modal from "./Modal";
import { groupRecipesByStatus } from "../utils/groupRecipesByStatus";
import sendPatchRequest from "../utils/sendPatchRequest";
import Alert from "./Alert";

const idxMapping = {
  "Saved-Recipe": 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
};

const roastVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeIn",
    },
  },
};

const Board = () => {
  const [recipes, setRecipes] = useState([]);
  const [showModal, setShowModal] = useState([false, {}]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    fetch("http://localhost/Tasty-Twist/backend/api/recipe")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const formattedData = groupRecipesByStatus(data);
        setRecipes(formattedData);
      });
  }, [recipes]);

  const handleOnDragEnd = (result) => {
    const { destination, source, type } = result;
    if (!destination) return;

    console.log(recipes[source.droppableId]);
    const startCol = Object.values(recipes[source.droppableId]);
    const finishCol = Object.values(recipes[destination.droppableId]);

    console.log(source.droppableId);

    //removed the recipe from the current column
    const [removed] = startCol[1].splice(source.index, 1);
    console.log("removed: ", removed);

    finishCol[1].splice(destination.index, 0, removed);

    sendPatchRequest(removed, destination.droppableId);
  };

  const handleDelete = (idx) => {
    const [key, i] = idx;
    const updatedRecipe = [...recipes];
    const { id } = { ...updatedRecipe[idxMapping[key]]["value"][0] };
    console.log(updatedRecipe[idxMapping[key]]["value"].splice(i, 1));
    console.log(id);
    setRecipes(updatedRecipe);
    fetch("http://localhost/Tasty-Twist/backend/api/recipe", {
      method: "DELETE",
      body: JSON.stringify({
        id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    setShowAlert(true);

    const timeout = setTimeout(() => {
      setShowAlert(false);

      clearTimeout(timeout);
    }, 1300);
  };
  return (
    <>
      {showAlert && (
        <Alert
          showAlert={showAlert}
          setShowAlert={setShowAlert}
          icon={
            <XCircleIcon height={40} width={40} className=" text-red-500" />
          }
          text={"Deleted Successfully!"}
        />
      )}
      {showModal[0] && (
        <Modal showModal={showModal} setShowModal={setShowModal} />
      )}
      <div className="flex items-center justify-center my-2">
        <img src={logo} alt="" height={100} width={100} />
        <motion.p
          className="font-bold"
          variants={roastVariants}
          initial="hidden"
          animate="visible"
        >
          " Why are you guys not responding? Have you eaten today? "
        </motion.p>
      </div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="grid grid-cols-6  mx-2 gap-2">
          {Object.entries(recipes).map(([id, { key, value }], index) => (
            <Droppable key={id} droppableId={index.toString()}>
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={`p-2 rounded-2xl shadow-sm ${
                    snapshot.isDraggingOver ? "bg-green-200" : "bg-white/40"
                  }`}
                >
                  <Column
                    id={key}
                    recipes={value}
                    index={index}
                    setShowModal={setShowModal}
                    handleDelete={handleDelete}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </>
  );
};

export default Board;
