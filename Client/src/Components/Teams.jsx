import { useEffect, useState } from "react";
import axios from "axios";
import { API_Test_URL, API_Production_URL } from "../../utils/constants";
import Teamcard from "./TeamCard";
const Teams = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(API_Production_URL + "teams")
      //.get(API_Production_URL + "teams")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="lg:pb-[10vmin] mt-1 lg:mt-10 TeamHolder flex flex-wrap lg:space-x-10 justify-center items-center w-[100vw] space-y-5">
        {(data.length === 0 && <p>Loading Teams....</p>) ||
          data.map((val) => {
            return <Teamcard key={val._id} data={val} />;
          })}
      </div>
    </>
  );
};
export default Teams;
