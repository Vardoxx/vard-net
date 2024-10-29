import { createBrowserRouter } from "react-router-dom";
import Cookies from "js-cookie";
import AuthPage from "../pages/Auth-page/AuthPage";
import "../styles/App.css";
import Layout from "../components/layout/Layout";
import NewsPage from "../pages/News-page/NewsPage";
import ProfilePage from "../pages/Profile-page/ProfilePage";
import AdminPage from "../pages/Admin-page/AdminPage";

const adminName = Cookies.get("userName");
const token = Cookies.get("token");

export const router = createBrowserRouter([
  { errorElement: <div className="text-red-600">Not Found</div> },
  {
    path: "/",
    element: <AuthPage />,
    index: true,
  },
  {
    element: <Layout />,
    children: [
      { path: "news", element: <NewsPage />, index: true },
      { path: "profile", element: <ProfilePage />, index: true },
    ],
  },
  { path: `admin/${adminName}${token}`, element: <AdminPage /> },
]);
