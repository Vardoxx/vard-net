import { createBrowserRouter } from "react-router-dom";

import AuthPage from "../pages/Auth-page/AuthPage";
import "../styles/App.css";
import Layout from "../components/layout/Layout";
import NewsPage from "../pages/News-page/NewsPage";
import ProfilePage from "../pages/Profile-page/ProfilePage";

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
      { path: "profile", element: <ProfilePage />, index: true },
    ],
  },
]);
