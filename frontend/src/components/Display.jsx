import image from "../assets/burger.png";
import Recipes from "./Recipes";
const Display = ({ recipes, fetched, setShowModal, setShowAlert }) => {
  return (
    <div className="display w-1/2">
      {!fetched ? (
        <div className="display__image flex items-center">
          <img src={image} alt="" className="w-4/5 h-1/2 mx-auto" />
        </div>
      ) : (
        <Recipes
          recipes={recipes}
          setShowModal={setShowModal}
          setShowAlert={setShowAlert}
        />
      )}
    </div>
  );
};

export default Display;
