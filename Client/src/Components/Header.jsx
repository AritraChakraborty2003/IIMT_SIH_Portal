const Header = () => {
  return (
    <>
      <div className="header bg-[rgb(232,111,63)] text-white w-[100vw] lg:w-[100vw] flex pt-5 border-[2px]">
        <div className="logo h-[10vmin]">
          <div className="imageHolder h-[10vmin] w-[25vmin] ml-4 mt-[-2vmin] lg:mt-0">
            <img
              src="https://i.postimg.cc/PxsrXgMy/iic-removebg-preview-1.png"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
        <div className="middleHolder w-[25vmin] lg:w-[25vw]"></div>
        <div className="iconHolder h-[10vmin] flex gap-x-5 lg:gap-x-12 font-roboto lg:mt-3">
          <p className="font-normal lg:text-[2.45vmin]">Login</p>
          <p className="font-normal lg:text-[2.45vmin]">Results</p>
          <p className="font-normal lg:text-[2.45vmin] hidden lg:block">
            <a href="https://www.sih.gov.in/" target="_blank">
              Announcements
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
export default Header;
