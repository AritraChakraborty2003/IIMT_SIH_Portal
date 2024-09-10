const Results = () => {
  return (
    <>
      <div className="holder flex flex-col justify-center items-center w-[100vw] h-[48vh] ">
        <div className="w-[40vw] h-[50vmin] mt-5 border-[2px] flex flex-col justify-center items-center">
          <p className="text-black  font-extrabold text-[4vmin]">
            Please Upload the results...
          </p>
          <form>
            <input
              type="file"
              id="file"
              className="mt-5"
              placeholder="Enter the results PDF..."
            ></input>
          </form>
        </div>
      </div>
    </>
  );
};
export default Results;
