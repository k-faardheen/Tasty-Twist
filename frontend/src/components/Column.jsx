import { Draggable } from "react-beautiful-dnd";
import Card from "./Card";

const Column = ({ id, recipes, index: colIdx }) => {
  const nameMapping = {
    "to-try": "Saved-Recipe",
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
  };

  if (id in nameMapping) {
    id = nameMapping[id];
  }

  return (
    <div className="">
      <h2 className="flex justify-between text-sm font-bold px-2">
        {id}
        <span className="font-normal bg-gray-200 px-2  rounded-full">
          {recipes.length}
        </span>
      </h2>
      <div className="space-y-2">
        {recipes.map((recipe, index) => (
          <Draggable
            key={recipe.id}
            draggableId={recipe.id.toString()}
            index={index}
          >
            {(provided) => (
              <Card
                recipe={recipe}
                index={index}
                id={id}
                innerRef={provided.innerRef}
                draggableProps={provided.draggableProps}
                dragHandleProps={provided.dragHandleProps}
              />
            )}
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default Column;
