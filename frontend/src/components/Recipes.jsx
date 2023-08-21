import HeartIcon from "@heroicons/react/20/solid/HeartIcon";
import { useState } from "react";

const Recipes = ({ recipes }) => {
  const [hasAdded, setHasAdded] = useState(false);
  const handleClick = ({ id, title, image, ingredients }) => {
    let formattedIngredients = [];
    Object.keys(ingredients).map((key) => {
      ingredients[key].map(({ original }) => {
        return formattedIngredients.push(original);
      });
    });
    console.log(id, title, image, formattedIngredients);

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
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="recipes__container">
      <div className="recipes">
        {recipes.map(
          ({ id, title, image, missedIngredients, usedIngredients }, i) => {
            const ingredients = {
              ...{ missedIngredients },
              ...{ usedIngredients },
            };
            return (
              <div
                className="recipe bg-white mx-2 mb-3 flex items-center justify-center p-4 rounded-3xl shadow-sm hover:shadow-lg"
                key={i}
              >
                <img
                  src={image}
                  alt="recipe image"
                  className="w-1/4 h-36 rounded-3xl object-cover"
                />
                <div className="recipe__details mx-5 p-2 w-3/4">
                  <h3 className="font-bold mb-2">{title}</h3>
                  <div>
                    {Object.keys(ingredients).map((key) =>
                      ingredients[key].map(({ original }, index) => (
                        <p key={index} className="text-sm text-gray-700">
                          {original}
                        </p>
                      ))
                    )}
                  </div>
                  <button
                    className={`${
                      !hasAdded
                        ? `text-[#f2f2f0] bg-[#b61e1f]`
                        : `bg-[#f2f2f0] text-[#b61e1f]`
                    } text-sm float-right flex rounded-full p-2 hover:bg-[#f2f2f0] hover:text-[#b61e1f] hover:ease-out duration-200`}
                  >
                    <HeartIcon
                      width={20}
                      height={20}
                      onClick={() =>
                        handleClick({ id, title, image, ingredients })
                      }
                    />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Recipes;
