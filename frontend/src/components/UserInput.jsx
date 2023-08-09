import { useEffect, useState } from "react";
import Ingredients from "./Ingredients";
import ReactPaginate from "react-paginate";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";
import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon";

const UserInput = ({ allIngredients, setAllIngredients, setIsLoading }) => {
  const [ingredients, setIngredients] = useState(null);
  const [count, setCount] = useState([]);
  const [hasFetched, setHasFetched] = useState(false);
  const [pages, setPages] = useState(0);
  // const [query, setQuery] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const pageCount = 3;
  const pageVisited = pageNumber * pageCount;

  useEffect(() => {
    fetch("http://localhost:8080/Tasty-Twist/backend/consumeListIngredient.php")
      .then((res) => res.json())
      .then((data) => {
        setIngredients(data);
        setHasFetched(true);
        setPages(Math.ceil(Object.entries(data).length / pageCount));
      })
      .catch((err) => console.log(err));
  }, []);

  const displayIngredientsCategories = () => {
    return Object.entries(ingredients)
      .slice(pageVisited, pageVisited + pageCount)
      .map(([key, ingredients], i) => (
        <Ingredients
          key={key}
          title={key}
          ingredients={ingredients}
          allIngredients={allIngredients}
          setAllIngredients={setAllIngredients}
        />
      ));
  };

  console.log("all ingredients: ", allIngredients);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;
    fetch(form.action, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ selectedIngredients: allIngredients }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-1/2">
      <div className="user__input__container bg-[#b61e1f;] text-[#f2f2f0] rounded-r-3xl">
        <p className="p-4 text-center font-semibold">
          Hey! What are you feeling like eating today? 😋
        </p>
        <div className="ingredient__count text-sm px-2 font-bold">
          Ingredients Selected: {allIngredients.length}
        </div>

        <form
          action="http://localhost:8080/Tasty-Twist/backend/api/ingredients"
          method="POST"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="ingredients__wrapper p-4">
            {hasFetched && displayIngredientsCategories()}

            {hasFetched && (
              <div className="flex">
                <ReactPaginate
                  className={`flex flex-1 items-center text-[#f2f2f0] my-2 py-2 `}
                  previousLabel={<ChevronLeftIcon width={20} height={20} />}
                  nextLabel={<ChevronRightIcon width={20} height={20} />}
                  pageCount={pages}
                  onPageChange={changePage}
                  containerClassName={"pagination p-10"}
                  pageClassName={"mx-2 "}
                  previousLinkClassName={"previousBtn"}
                  nextLinkClassName={"nextBtn"}
                  disabledClassName={"paginationDisabled opacity-50"}
                  activeClassName={"paginationActive underline "}
                />
                <button className="submit__btn mx-10 bg-[#f2f2f0] text-black rounded-md border-black border-2 text-center text-sm px-10 py-2 h-1/2 font-bold">
                  Done
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserInput;
