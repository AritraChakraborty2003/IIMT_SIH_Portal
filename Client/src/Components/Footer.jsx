const Footer = () => {
  return (
    <>
      <div className="w-[100vw] pb-2 mt-3 flex justify-center items-center">
        <div className="mt-5 w-[90vw] lg:w-[96vw] border-black border-t-[3px] flex justify-center items-center font-normal">
          <div className="imageHolder h-[8vmin] w-[8vmin]">
            <img
              src="https://i.postimg.cc/RCJ8vrn2/VD-page-0001-removebg-preview.png"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          &nbsp; &copy;2024 VentureDrobe. &nbsp;All Rights &nbsp;Reserved.
        </div>
      </div>
    </>
  );
};
export default Footer;
