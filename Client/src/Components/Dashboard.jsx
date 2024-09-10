import Footer from "./Footer";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  API_Test_URL,
  API_Production_URL,
  BASE_Test_URL,
  BASE_Production_URL,
} from "../../utils/constants";
import axios from "axios";
const Dashboard = () => {
  const location = useLocation();
  //console.log(location.state.val);
  const [datesData, setDatesData] = useState([]);
  const [resultsData, setResultsData] = useState([]);
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    axios.get(API_Production_URL + "dates").then((res) => {
      setDatesData(res.data);
    });
    axios.get(API_Production_URL + "accept").then((res) => {
      setResultsData(res.data);
    });

    axios
      .get(API_Production_URL + "accept/data?teamName=" + location.state.val)
      .then((res) => {
        console.log(res);
        setSelected(res.data.status);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {localStorage.getItem("isLoggedIn") === "true" ? (
        <>
          <Header type="dashboard" />
          <div className="dashboardHolder">
            <div className="p-2 DatesArea w-[100vw] h-[50vh] ">
              <h1 className="text-[6vmin] font-extrabold">Important Dates:</h1>
              <div className="mt-5 textHolder h-[35vh] flex flex-col justify-center items-center">
                <p className="text-center text-[7vmin] lg:text-[5vmin] font-medium">
                  {datesData.length > 0
                    ? datesData[0].title +
                      " " +
                      ":" +
                      "-" +
                      " " +
                      " " +
                      " " +
                      datesData[0].date
                    : "Will be  updated soon"}
                </p>
                <br></br>
                <p className="text-center text-[7vmin] lg:text-[5vmin] font-medium">
                  {datesData.length > 0
                    ? datesData[1].title +
                      " " +
                      ":" +
                      "-" +
                      " " +
                      " " +
                      " " +
                      datesData[1].date
                    : "Will be  updated soon"}
                </p>
              </div>
            </div>
            <div className="p-4 SelectionArea w-[100vw] h-[50vh]">
              <h1 className="text-[6vmin] font-extrabold">Results:</h1>
              <div className="textHolder h-[35vh] flex justify-center items-center">
                {resultsData.length === 0 && (
                  <p className="text-center text-2xl">
                    Results to be declared soon after completion of the internal
                    rounds.
                  </p>
                )}
                {resultsData.length > 0 && selected && (
                  <>
                    <img
                      src={BASE_Production_URL + "tick.png"}
                      height={50}
                      width={50}
                    ></img>
                    <p className="ml-3 text-[7vmin] text-[#149400] font-extrabold">
                      You are selected
                    </p>
                  </>
                )}
                {resultsData.length > 0 && !selected && (
                  <>
                    <img
                      src={BASE_Production_URL + "hold.png"}
                      height={60}
                      width={60}
                    ></img>
                    <p className="ml-3 text-[7vmin] text-[#fb0101] font-extrabold">
                      You are on hold
                    </p>
                  </>
                )}
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
