import React from "react";
import ReactDOM from "react-dom/client";
import LoginArea from "./Components/LoginArea";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import AdminLogin from "./Components/AdminLogin";
import CMS from "./Components/CMS";
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
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/cms",
    element: <CMS />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
