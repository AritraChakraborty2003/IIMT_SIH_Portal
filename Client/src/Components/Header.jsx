import { Link } from "react-router-dom";

const Header = (props) => {
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/";
  };
  return (
    <>
      {props.type != "dashboard" ? (
        <div className="header bg-[rgb(232,111,63)] text-white w-[100vw] lg:w-[100vw] flex pt-5 border-[2px]">
          <div className="logo h-[10vmin]">
            <div className="imageHolder h-[10vmin] w-[25vmin] ml-4 mt-[-2vmin] lg:mt-0">
              <img
                src="https://i.postimg.cc/PxsrXgMy/iic-removebg-preview-1.png"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
          <div className="middleHolder w-[25vmin] lg:w-[25vw]"></div>
          <div className="iconHolder h-[10vmin] flex gap-x-5 lg:gap-x-12 font-roboto lg:mt-3">
            <p className="font-normal lg:text-[2.45vmin] hidden lg:block">
              {" "}
              <Link to="/">Home</Link>
            </p>
            <p className="font-normal lg:text-[2.45vmin]">
              <Link to="/login">Login</Link>
            </p>
            <p className="font-normal lg:text-[2.45vmin]">
              <Link to="/dashboard">Results</Link>
            </p>
            <p className="font-normal lg:text-[2.45vmin] hidden lg:block">
              <a href="https://www.sih.gov.in/" target="_blank">
                Announcements
              </a>
            </p>
            <p className="font-normal lg:text-[2.45vmin] hidden lg:block">
              Admin
            </p>
          </div>
        </div>
      ) : (
        <div className="header bg-[rgb(232,111,63)] text-white w-[100vw] lg:w-[100vw] flex pt-5 border-[2px]">
          <div className="logo h-[10vmin]">
            <div className="imageHolder h-[10vmin] lg:h-[8vmin] w-[25vmin] ml-4 mt-[-2vmin] lg:mt-0">
              <img
                src="https://i.postimg.cc/PxsrXgMy/iic-removebg-preview-1.png"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
          <div className="middleHolder w-[40vw] lg:w-[73vw]"></div>
          <div className="iconHolder">
            <button
              className="bg-white text-black p-2 lg:h-[6vmin] w-[20vmin] mt-[-2vmin] lg:mt-2"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
