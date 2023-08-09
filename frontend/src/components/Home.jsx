import UserInput from "./UserInput";
import Display from "./Display";
import { useState } from "react";

const Home = () => {
  const [allIngredients, setAllIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="home flex items-center mt-14">
      <UserInput
        allIngredients={allIngredients}
        setAllIngredients={setAllIngredients}
        setIsLoading={setIsLoading}
      />
      {!isLoading ? <Display /> : <p> Loading...</p>}
    </div>
  );
};

export default Home;
