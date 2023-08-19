import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { useEffect, useState } from "react";
import Column from "./Column";
import { groupRecipesByStatus } from "../utils/groupRecipesByStatus";
import sendPatchRequest from "../utils/sendPatchRequest";

const Board = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/Tasty-Twist/backend/api/recipe")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const formattedData = groupRecipesByStatus(data);
        setRecipes(formattedData);
      });
  }, []);

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

  return (
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
                <Column id={key} recipes={value} index={index} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Board;
