import Header from "./Header";
import Footer from "./Footer";
import { API_Test_URL, API_Production_URL } from "../../utils/constants";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const AdminLogin = () => {
  const sendData = (e) => {
    e.preventDefault();
    const teamName = document.getElementById("teamName").value;
    const password = document.getElementById("password").value;
    if (teamName === "" || password === "") {
      alert("Invalid Credentials");
    } else {
      if (
        teamName === process.env.REACT_ADMIN_USERNAME &&
        password === process.env.REACT_ADMIN_PASSWORD
      ) {
        localStorage.setItem("isLoggedInAdmin", true);
        window.location.href = "/cms";
        //   axios
        //     .post(API_Production_URL + "teams/login/", {
        //       teamName: teamName,
        //       password: password,
        //     })
        //     .then((res) => {
        //       if (res.data.message === "Login successful") {
        //         localStorage.setItem("isLoggedIn", true);
        //         window.location.href = "/dashboard";
        //       } else {
        //         alert("Invalid Credentials");
        //       }
        //     })
        //     .catch((err) => {
        //       console.log(err);
        //     });
      } else {
        alert("Invalid Credentials");
      }
    }
  };
  return (
    <>
      <Header />
      <div className="mt-[2vmin] lg:mt-[0] mainContainer flex justify-center items-center">
        <div className="hidden w-[45vw] p-4 lg:block leftHolder">
          <div className="w-[50vw]  flex justify-center items-center">
            <div className="mainBox">
              <div className=" w-[20vw] h-[20vh] ml-[6vmin]">
                <img
                  src="https://i.postimg.cc/Gh6KR7Ch/SIH.png"
                  alt="User"
                  className="ImageHolder max-w-full max-h-full object-contain"
                />
              </div>
              <div className="imageHolder w-[30vw] h-[50vh]">
                <img
                  src="https://i.postimg.cc/WzGN4YyL/IIMT.jpg"
                  alt="User"
                  className="ImageHolder max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 rightHolder w-[95vw] lg:w-[50vw] flex justify-center items-center">
          <div>
            <p className="mt-[5vmin] lg:mt-[0] text-2xl font-roboto font-extrabold">
              Login in to Admin account!...
            </p>
            <p />
            <div className=" mt-4 flex flex-col rounded-[3vmin] justify-center items-center form border-[3px] w-[95vw] p-4 lg:w-[45vw] ">
              <input
                type="text"
                placeholder="Enter Team Name..."
                id="teamName"
                className="w-[95%] p-2 border-bottom"
              />
              <br></br>
              <br></br>
              <input
                type="text"
                id="password"
                placeholder="Enter password..."
                className="w-[95%] p-2  border-bottom"
              />
              <br></br>
              <br></br>

              <button
                onClick={sendData}
                className="bg-[#24a0ed] text-white text-[4vmin] lg:text-[2.35vmin] p-2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminLogin;
