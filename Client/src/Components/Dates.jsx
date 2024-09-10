import { API_Production_URL, API_Test_URL } from "../../utils/constants";
import axios from "axios";
const Dates = () => {
  const sendData = () => {
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    if (title === "" || date === "") {
      alert("All Fields are mandatory...");
    }
    // API call to send data to backend
    axios
      .post(API_Production_URL + "dates", { title: title, date: date })
      .then((response) => {
        if (response.data.status === 200) {
          alert("Data sent successfully...");

          document.getElementById("title").value = "";
          document.getElementById("date").value = "";
        } else {
          alert("Failed to store data");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className=" rightHolder lg:w-[100vw] flex justify-center items-center">
        <div>
          <p className="mt-[10vmin] lg:mt-[0] text-2xl font-roboto font-extrabold">
            Add your Dates...
          </p>
          <p />
          <div className=" mt-4 flex flex-col rounded-[3vmin] justify-center items-center form border-[3px] w-[80vw] p-4 lg:w-[35vw] ">
            <input
              type="text"
              placeholder="Enter the title..."
              id="title"
              className="w-[95%] p-2 border-bottom"
            />
            <br></br>
            <br></br>
            <input
              type="text"
              id="date"
              placeholder="Enter date..."
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
    </>
  );
};

export default Dates;
