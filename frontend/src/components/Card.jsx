const Card = ({
  recipe,
  index,
  id,
  innerRef,
  draggableProps,
  dragHandleProps,
}) => {
  return (
    <div
      className="bg-white rounded-md space-y-2 drop-shadow-md my-2"
      ref={innerRef}
      {...draggableProps}
      {...dragHandleProps}
    >
      <div className="flex items-center px-2 py-1">
        <img
          src={recipe.image}
          alt="recipe image"
          className=" w-20 h-20 object-cover bg-black rounded-xl"
        />
        <h2 className="text-xs font-bold pl-2">{recipe.title}</h2>
      </div>
      <div></div>
    </div>
  );
};

export default Card;
