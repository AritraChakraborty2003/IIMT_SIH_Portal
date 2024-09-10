import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Header from "./Header";
import Dates from "./Dates";
import Teams from "./Teams";
import Results from "./AddResults";

const CMS = () => {
  const [active, setActive] = useState("u1");
  useEffect(() => {
    document.getElementById(active).style.backgroundColor = "black";
  }, [active]);

  return (
    <>
      {localStorage.getItem("isLoggedInAdmin") === "true" ? (
        <>
          <Header type="dashboard" category="admin"></Header>
          <div className="holder w-[100vw] h-[15vh] flex justify-center items-center space-x-[10vmin]">
            <p
              class="option"
              className="font-bold text-[4.5vmin]"
              onClick={() => {
                document.getElementById(active).style.backgroundColor =
                  "#d3d3d3";
                setActive("u1");
              }}
            >
              Teams
              <div
                id="u1"
                className="underLine w-[16vmin] h-[4px] bg-[#d3d3d3]"
                onClick={() => {
                  document.getElementById(active).style.backgroundColor =
                    "#d3d3d3";
                  setActive("u1");
                }}
              ></div>
            </p>
            <p
              class="option"
              className="font-bold text-[4.5vmin]"
              onClick={() => {
                document.getElementById(active).style.backgroundColor =
                  "#d3d3d3";
                setActive("u2");
              }}
            >
              Add Dates
              <div
                id="u2"
                className="underLine w-[16vmin] h-[4px] bg-[#d3d3d3]"
                onClick={() => {
                  document.getElementById(active).style.backgroundColor =
                    "#d3d3d3";
                  setActive("u2");
                }}
              ></div>
            </p>
            <p
              class="option"
              className="font-bold text-[4.5vmin]"
              onClick={() => {
                document.getElementById(active).style.backgroundColor =
                  "#d3d3d3";
                setActive("u3");
              }}
            >
              Add Results
              <div
                id="u3"
                className="underLine w-[16vmin] h-[4px] bg-[#d3d3d3]"
                onClick={() => {
                  document.getElementById(active).style.backgroundColor =
                    "#d3d3d3";
                  setActive("u3");
                }}
              ></div>
            </p>
          </div>
        </>
      ) : (
        (window.location.href = "/admin")
      )}

      {(active === "u1" && <Teams />) ||
        (active === "u2" && <Dates />) ||
        (active === "u3" && <Results />) ||
        null}

      <div className="footer mt-[10vmin]">
        <Footer />
      </div>
    </>
  );
};
export default CMS;
