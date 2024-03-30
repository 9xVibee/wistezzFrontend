import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import "./index.css";
import SearchPage from "./pages/SearchPage";
import SubmitWebsite from "./pages/SubmitWebsite";

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
]);
export default appRouter;
