import React from "react";
import ReactDOM from "react-dom/client";
import LoginArea from "./Components/LoginArea";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
const AppLayout = () => {
  return (
    <>
      <Header />
      <LoginArea />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
