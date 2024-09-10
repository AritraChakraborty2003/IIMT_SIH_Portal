import Header from "./Header";
import Footer from "./Footer";
const Login = () => {
  //const senData=()
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
              Login to your dashboard!...
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
export default Login;
