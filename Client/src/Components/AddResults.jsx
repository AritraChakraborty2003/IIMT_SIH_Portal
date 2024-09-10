import { API_Production_URL, API_Test_URL } from "../../utils/constants";
import { useState } from "react";
import axios from "axios";

const Results = () => {
  const [file, setFile] = useState();
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  function handleUpload(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    axios
      .post(API_Production_URL + "results", formData)
      .then((res) => {
        if (res.data.status === 200) {
          alert("Data uploaded successfully...");
        } else {
          alert("Data not updated");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <div className=" holder flex flex-col justify-center items-center w-[100vw] h-[48vh] ">
        <div className="w-[85vw] lg:w-[40vw] h-[50vmin] mt-5 border-[2px] flex flex-col justify-center items-center">
          <p className="text-black  font-extrabold text-[4vmin]">
            Please Upload the results...
          </p>
          <form>
            <input
              type="file"
              id="file"
              className="mt-5"
              placeholder="Enter the results PDF..."
              onChange={handleChange}
            ></input>
            <br></br>
            <br></br>
            <div className="flex justify-center items-center">
              <button
                onClick={handleUpload}
                className="bg-[#0065ad] p-3 text-[3vmin] lg:text-[2.75vmin] text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Results;
