import { useState } from "react";
import Pagination from "./Pagination";

const Ingredient = ({
  title,
  ingredients,
  allIngredients,
  setAllIngredients,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const lastPageIndex = currentPage * pageSize;
  const firstPageIndex = lastPageIndex - pageSize;
  const currentIngredients = ingredients.slice(firstPageIndex, lastPageIndex);

  const retrieveIngredients = (e) => {
    e.preventDefault();
    const ingredient = e.target.innerText;
    const updatedIngredients = [...allIngredients];
    const index = updatedIngredients.indexOf(ingredient);

    if (index !== -1) {
      updatedIngredients.splice(index, 1);
    } else {
      updatedIngredients.push(ingredient);
    }
    setAllIngredients(updatedIngredients);
  };

  console.log(allIngredients.length);
  return (
    <div className="ingredient__container p-1 h-full">
      <div className="ingredient__header text-[#f2f2f0] flex my-1 py-1 border-b-2">
        <h2 className="mr-3 font-medium ">{title}</h2>
      </div>
      <div className="ingredient text-black grid grid-cols-4 grid-rows-2">
        {currentIngredients !== null &&
          currentIngredients.map(({ id, item_name }) => (
            <button
              onClick={(e) => {
                retrieveIngredients(e);
              }}
              key={id}
              className={`${
                allIngredients.includes(item_name)
                  ? "bg-red-900 text-white"
                  : "bg-[#f2f2f0] text-black"
              } rounded-md border-black border-2 text-center text-sm mx-2 my-1 py-2 font-bold`}
            >
              {item_name}
            </button>
          ))}
        <Pagination
          totalCount={ingredients.length}
          pageSize={pageSize}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Ingredient;
