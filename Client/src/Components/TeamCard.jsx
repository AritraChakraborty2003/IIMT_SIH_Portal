import { API_Production_URL, API_Test_URL } from "../../utils/constants";
import axios from "axios";
const Teamcard = (props) => {
  const SelectedData = (...args) => {
    // Here you can also make a request to your backend to store this data.
    axios
      .post(API_Production_URL + "accept", {
        teamLeader: args[0],
        teamName: args[1],
        phoneNo: args[2],
      })
      .then((response) => {
        if (response.data.status === 200) {
          axios
            .delete(
              API_Test_URL +
                "teams/delete/data?teamName=" +
                args[1] +
                "&teamLeader=" +
                args[0]
            )
            .then((response) => {
              if (response.data.status === 200) {
                window.location.reload();
                alert("Data sent successfully");
              } else {
                alert("Data not uploaded");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          alert("Data not uploaded");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const RejectedData = (...args) => {
    // Here you can also make a request to your backend to store this data.
    axios
      .post(API_Test_URL + "dumps", {
        teamLeader: args[0],
        teamName: args[1],
        phoneNo: args[2],
      })
      .then((response) => {
        if (response.data.status === 200) {
          axios
            .delete(
              API_Test_URL +
                "teams/delete/data?teamName=" +
                args[1] +
                "&teamLeader=" +
                args[0]
            )
            .then((response) => {
              if (response.data.status === 200) {
                window.location.reload();
                alert("Data dumped successfully");
              } else {
                alert("Data not uploaded");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          alert("Data not uploaded");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="p-8 w-[75vmin] lg:w-[48vmin] bg-[#ff6427] text-white ">
        <p className="lg:text-[3vmin] font-bold">
          Team:&nbsp;{props.data.teamName}
        </p>
        <p>
          <span className="font-bold lg:text-[2.45vmin]">Leader:</span>
          &nbsp;{props.data.teamLeader}
        </p>
        <p>Department:{props.data.projectDepartment}</p>
        <p>Details:{props.data.projectDetails}</p>

        <p>Number:{props.data.phoneNo}</p>
        <p>Members:{props.data.teamMembers}</p>

        <div className="mt-5 btnHolder flex justify-center items-center  gap-5">
          <button
            className="bg-[#0b8800] text-white p-3"
            onClick={() =>
              SelectedData(
                props.data.teamLeader,
                props.data.teamName,
                props.data.phoneNo
              )
            }
          >
            Selected
          </button>
          <button
            className="bg-[#ffe603] text-black p-3"
            onClick={() =>
              RejectedData(
                props.data.teamLeader,
                props.data.teamName,
                props.data.phoneNo
              )
            }
          >
            Dump
          </button>
        </div>
      </div>
    </>
  );
};
export default Teamcard;
