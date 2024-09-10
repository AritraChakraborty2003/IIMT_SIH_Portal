import Footer from "./Footer";
import Header from "./Header";
import { useLocation } from "react-router-dom";
const Dashboard = () => {
  const location = useLocation();
  //console.log(location.state.val);
  return (
    <>
      {localStorage.getItem("isLoggedIn") === "true" ? (
        <>
          <Header type="dashboard" />
          <div className="dashboardHolder">
            <div className="p-2 DatesArea w-[100vw] h-[50vh] ">
              <h1 className="text-[6vmin] font-extrabold">Important Dates:</h1>
              <div className="textHolder h-[35vh] flex justify-center items-center">
                <p className="text-center text-2xl">
                  Dates to be declared soon after completion of the internal
                  rounds.
                </p>
              </div>
            </div>
            <div className="p-4 SelectionArea w-[100vw] h-[50vh]">
              <h1 className="text-[6vmin] font-extrabold">Results:</h1>
              <div className="textHolder h-[35vh] flex justify-center items-center">
                <p className="text-center text-2xl">
                  Results to be declared soon after completion of the internal
                  rounds.
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        (window.location.href = "/login")
      )}
    </>
  );
};
export default Dashboard;
