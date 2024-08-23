import { createBrowserRouter, NavLink } from "react-router-dom";

import AuthPage from "../pages/Auth-page/AuthPage";
import "../styles/App.css";
import Layout from "../components/layout/Layout";

export const router = createBrowserRouter([
  { errorElement: <div className="text-red-600">Poshel naxuy</div> },
  {
    path: "/",
    element: (
      <>
        <AuthPage />
        <NavLink to="homepage">Home</NavLink>
      </>
    ),
    index: true,
  },
  {
    element: <Layout />,
    children: [{ path: "homepage", element: <div>Home</div>, index: true }],
  },
]);
