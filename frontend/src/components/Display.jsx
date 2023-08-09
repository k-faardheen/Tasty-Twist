import image from "../assets/burger.png";
const Display = () => {
  return (
    <div className="display w-1/2">
      <div className="display__image flex items-center">
        <img src={image} alt="" className="w-4/5 h-1/2 m-auto" />
      </div>
    </div>
  );
};

export default Display;
