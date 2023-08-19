import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";
import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";

const SavedRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [pages, setPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const pageCount = 3;
  const pageVisited = pageNumber * pageCount;

  useEffect(() => {
    fetch("http://localhost:8080/Tasty-Twist/backend/api/recipe")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRecipes(data);
        setPages(Math.ceil(Object.entries(data).length / pageCount));
      });
  }, [recipes]);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleDelete = (i, id) => {
    const updatedRecipe = [...recipes];
    updatedRecipe.splice(i, 1);
    console.log(updatedRecipe);
    setRecipes(updatedRecipe);

    fetch("http://localhost:8080/Tasty-Twist/backend/api/recipe", {
      method: "DELETE",
      body: JSON.stringify({
        id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  return (
    <div className="saved__recipe__container w-full h-screen">
      <h3 className="text-center font-bold my-2">Your Saved Recipes</h3>
      <div className="saved__recipe w-full h-3/4">
        {recipes
          .slice(pageVisited, pageVisited + pageCount)
          .map(({ id, title, image, ingredients }, i) => (
            <div
              className="recipe w-3/4 mx-auto p-2 mb-4 flex items-center justify-evenly shadow-md rounded-3xl h-40 border-2 relative"
              key={id}
            >
              <div className="recipe__image">
                <img
                  src={image}
                  alt="dish image"
                  className="h-36 w-36 rounded-3xl "
                />
              </div>
              <div className="recipe__ingredients w-4/6">
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm">{ingredients}</p>
              </div>
              <button
                className="absolute right-10 bottom-3 p-2 bg-[#b61e1f] text-[#f2f2f0] rounded-full"
                onClick={() => handleDelete(i, id)}
              >
                <TrashIcon width={20} height={20} />
              </button>
            </div>
          ))}
      </div>
      <div className="flex justify-center items-center">
        <ReactPaginate
          className={`flex flex-1 items-center text-black my-2 py-2 `}
          previousLabel={<ChevronLeftIcon width={20} height={20} />}
          nextLabel={<ChevronRightIcon width={20} height={20} />}
          pageCount={pages}
          onPageChange={changePage}
          containerClassName={"pagination p-10"}
          pageClassName={"mx-2"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled opacity-50"}
          activeClassName={"paginationActive underline "}
        />
        <Link
          to="/meal-planner"
          className="px-2 py-1 border-2 border-[#b61e1f] rounded-lg font-bold text-sm"
        >
          Go to planner
        </Link>
      </div>
    </div>
  );
};

export default SavedRecipe;
