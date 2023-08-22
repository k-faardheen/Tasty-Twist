import HeartIcon from "@heroicons/react/20/solid/HeartIcon";
import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { AnimatePresence, motion } from "framer-motion";

const Recipes = ({ recipes, setShowModal, setShowAlert }) => {
  const [hasAdded, setHasAdded] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [pages, setPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const pageCount = 3;
  const pageVisited = pageNumber * pageCount;

  useEffect(() => {
    setPages(Math.ceil(recipes.length / pageCount));
  }, [pages]);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  console.log("total pages: ", pages);
  const handleClick = ({ id, title, image, ingredients }) => {
    let formattedIngredients = [];
    Object.keys(ingredients).map((key) => {
      ingredients[key].map(({ original }) => {
        return formattedIngredients.push(original);
      });
    });

    fetch("http://localhost/Tasty-Twist/backend/api/recipe", {
      method: "POST",
      body: JSON.stringify({
        id,
        title,
        image,
        formattedIngredients,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setHasAdded(true);
        setShowAlert(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="recipes__container">
      <div className="recipes">
        {recipes
          .slice(pageVisited, pageVisited + pageCount)
          .map(
            ({ id, title, image, missedIngredients, usedIngredients }, i) => {
              const ingredients = {
                ...{ missedIngredients },
                ...{ usedIngredients },
              };

              return (
                <motion.div
                  className="recipe h-44 bg-white mx-2 mb-3 flex items-center justify-center p-4 rounded-3xl shadow-sm hover:shadow-lg cursor-pointer"
                  key={i}
                  layoutId={i}
                >
                  <motion.img
                    src={image}
                    alt="recipe image"
                    className="w-1/4 h-36 rounded-3xl object-cover"
                  />
                  <motion.div className="recipe__details mx-5 p-2 w-3/4">
                    <motion.h3
                      className="font-bold mb-2 hover:text-[#b61e1f]"
                      onClick={() =>
                        setShowModal([true, { title, image, ingredients }])
                      }
                    >
                      {title}
                    </motion.h3>
                    <motion.div>
                      {Object.keys(ingredients).map((key, index) => {
                        if (index < 1) {
                          return ingredients[key].map(({ original }, index) => {
                            if (index <= 1) {
                              return (
                                <motion.p
                                  key={index}
                                  className="text-sm text-gray-700"
                                >
                                  {original}
                                </motion.p>
                              );
                            }
                          });
                        } else if (index === 1) {
                          return (
                            <motion.p className="text-gray-700">...</motion.p>
                          );
                        }
                        return null;
                      })}
                    </motion.div>
                    <motion.button
                      className="text-[#f2f2f0] bg-[#b61e1f] text-sm float-right flex rounded-full p-2 hover:bg-[#f2f2f0] hover:text-[#b61e1f] hover:ease-out duration-200"
                      onClick={() =>
                        handleClick({ id, title, image, ingredients })
                      }
                    >
                      <HeartIcon width={20} height={20} />
                    </motion.button>
                  </motion.div>
                </motion.div>
              );
            }
          )}
      </div>

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
        disabledClassName={"paginationDisabled opacity-30"}
        activeClassName={"paginationActive underline "}
      />
    </div>
  );
};

export default Recipes;
