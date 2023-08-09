import { Link } from "react-router-dom";
import links from "../utils/links";
import logo from "../assets/avatar.png";
import UserIcon from "@heroicons/react/24/solid/UserIcon";

const Header = () => {
  return (
    <header className="p-4  flex items-center">
      <div className="header__logo flex flex-1 items-center">
        <img src={logo} alt="avatar logo" width={50} height={50} />
        <h1 className="font-logo font-bold text-2xl">
          Zahra's Kitchen <span className="text-[#b61e1f;]">.</span>
        </h1>
      </div>
      <div className="nav flex items-center">
        <nav className="flex  mx-4">
          {Object.entries(links).map(([key, { title, url }]) => (
            <div className="link mx-2 text-sm font-bold" key={key}>
              <Link to={url}>{title}</Link>
            </div>
          ))}
        </nav>
        <div className="right-nav">
          <div className="link text-sm flex items-center">
            <div className="user__icon mx-4 px-5">
              <Link to="/">
                <UserIcon width={20} height={20} />
              </Link>
            </div>
            <div className="meal__planner font-bold py-2 px-5 border-solid border-2 border-[#b61e1f] rounded-md">
              <Link to="meal-planner">Meal Planner </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
