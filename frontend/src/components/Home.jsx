import UserInput from "./UserInput";
import Display from "./Display";
import { useState } from "react";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetched, hasFetched] = useState(false);

  console.log("Recipes: ", recipes);
  return (
    <div className="home flex mt-14">
      <UserInput
        setIsLoading={setIsLoading}
        setRecipes={setRecipes}
        hasFetched={hasFetched}
      />
      {!isLoading ? (
        <Display recipes={recipes} fetched={fetched} />
      ) : (
        <p> Loading...</p>
      )}
    </div>
  );
};

export default Home;
