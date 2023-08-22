import MinusIcon from "@heroicons/react/24/outline/MinusIcon";
const Card = ({
  setShowModal,
  handleDelete,
  recipe,
  index,
  id,
  innerRef,
  draggableProps,
  dragHandleProps,
}) => {
  const { title, image, ingredients } = recipe;

  return (
    <>
      <div
        className="bg-white rounded-md space-y-2 drop-shadow-md my-2"
        ref={innerRef}
        {...draggableProps}
        {...dragHandleProps}
      >
        <div className="flex items-center px-2 py-1 relative">
          <button onClick={() => handleDelete([id, index])}>
            <MinusIcon
              width={20}
              height={20}
              className="absolute top-0 right-1 text-[#b61e1f]"
            />
          </button>

          <img
            src={recipe.image}
            alt="recipe image"
            className=" w-20 h-20 object-cover rounded-xl"
          />
          <h2
            className="text-xs font-bold pl-2 hover:text-[#b61e1f] hover:ease-out duration-200"
            onClick={() => setShowModal([true, { title, image, ingredients }])}
          >
            {recipe.title}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Card;
