import { useState } from "react";
import { API_Test_URL, API_Production_URL } from "../../utils/constants";
import axios from "axios";
const LoginArea = () => {
  const sendData = (e) => {
    e.preventDefault();

    const teamName = document.getElementById("teamName").value;
    const teamLeader = document.getElementById("teamLeader").value;
    const phoneNo = document.getElementById("phoneNo").value;
    const projectCategory = document.getElementById("projectCategory").value;
    const projectDepartment =
      document.getElementById("projectDepartment").value;
    const projectDetails = document.getElementById("projectDetails").value;
    const teamMembers = document.getElementById("teamMembers").value;

    if (
      teamName === "" ||
      teamLeader === "" ||
      phoneNo === "" ||
      projectCategory === "" ||
      projectDepartment === "" ||
      projectDetails === "" ||
      teamMembers === "" ||
      projectDetails === "" ||
      teamMembers === ""
    ) {
      alert("Please fill all the fields");
    } else {
      axios
        .post(API_Production_URL + "teams", {
          teamName: teamName,
          teamLeader: teamLeader,
          phoneNo: phoneNo,
          projectCategory: projectCategory,
          projectDepartment: projectDepartment,
          projectDetails: projectDetails,
          teamMembers: teamMembers,
        })
        .then((res) => {
          if (res.data.status === 200) {
            alert(
              `Data sent successfully and your password for login is ${
                teamName + "_SIH_2024"
              }`
            );
            document.getElementById("teamName").value = "";
            document.getElementById("teamLeader").value = "";
            document.getElementById("phoneNo").value = "";
            document.getElementById("projectCategory").value = "";

            document.getElementById("projectDepartment").value = "";
            document.getElementById("projectDetails").value = "";
            document.getElementById("teamMembers").value = "";
          } else {
            console.log("Error Occurred Please try again...");
          }
        });
    }
  };
  return (
    <>
      <div className="mt-[2vmin] lg:mt-[0] mainContainer flex justify-center items-center">
        <div className="hidden w-[45vw] p-4 lg:block leftHolder">
          <div className="w-[50vw]  flex justify-center items-center">
            <div className="mainBox mt-[-7vmin]">
              <div className=" w-[25vw] h-[25vh] ml-[10vmin]">
                <img
                  src="https://i.postimg.cc/Gh6KR7Ch/SIH.png"
                  alt="User"
                  className="ImageHolder max-w-full max-h-full object-contain"
                />
              </div>
              <div className="imageHolder w-[40vw] h-[60vh] ml-4">
                <img
                  src="https://i.postimg.cc/WzGN4YyL/IIMT.jpg"
                  alt="User"
                  className="ImageHolder max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="rightHolder w-[95vw] lg:w-[50vw] flex justify-center items-center mt-5">
          <div>
            <p className="mt-[5vmin] lg:mt-[0] text-2xl font-roboto font-extrabold">
              SIH Registration Portal (IIMT College Of Engg.)
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
                id="teamLeader"
                placeholder="Enter Team Leader Name..."
                className="w-[95%] p-2  border-bottom"
              />
              <br></br>
              <br></br>

              <input
                type="text"
                id="phoneNo"
                placeholder="Enter Team Phone No..."
                className="w-[95%] p-2  border-bottom"
              />
              <br></br>
              <br></br>
              <input
                type="text"
                id="projectCategory"
                className="w-[95%] p-2  border-bottom"
                placeholder="Enter Project Category..."
              />
              <br></br>
              <br></br>
              <input
                type="text"
                id="projectDepartment"
                className="w-[95%] p-2  border-bottom"
                placeholder="Enter Project Department..."
              />
              <br></br>
              <br></br>
              <input
                type="text"
                id="projectDetails"
                className="w-[95%] p-2  border-bottom"
                placeholder="Enter Project Details..."
              />
              <br></br>
              <br></br>
              <input
                type="text"
                id="teamMembers"
                className="w-[95%] p-2  border-bottom"
                placeholder="Enter Team Members using commas..."
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
    </>
  );
};
export default LoginArea;
