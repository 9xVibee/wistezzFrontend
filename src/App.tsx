import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import "./index.css";
import SearchPage from "./pages/SearchPage";
import SubmitWebsite from "./pages/SubmitWebsite";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import WebsiteDetails from "./pages/WebsiteDetails";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/submit-website",
        element: <SubmitWebsite />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/website/:id",
    element: <WebsiteDetails />,
  },
]);
export default appRouter;
