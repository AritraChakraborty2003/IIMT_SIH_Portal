import React from "react";
import ReactDOM from "react-dom/client";
import LoginArea from "./Components/LoginArea";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const AppLayout = () => {
  return (
    <>
      <Header />
      <LoginArea />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
