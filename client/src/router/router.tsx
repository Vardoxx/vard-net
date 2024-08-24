import { createBrowserRouter } from "react-router-dom";

import AuthPage from "../pages/Auth-page/AuthPage";
import "../styles/App.css";
import Layout from "../components/layout/Layout";
import NewsPage from "../pages/News-page/PopularPage";

export const router = createBrowserRouter([
  { errorElement: <div className="text-red-600">Poshel naxuy</div> },
  {
    path: "/",
    element: (
      <>
        <AuthPage />
      </>
    ),
    index: true,
  },
  {
    element: <Layout />,
    children: [
      { path: "news", element: <NewsPage />, index: true },
      { path: "debates", element: <div>Debates</div>, index: true },
      { path: "profile", element: <div>Profile</div>, index: true },
    ],
  },
]);
