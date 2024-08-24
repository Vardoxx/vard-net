import { createBrowserRouter } from "react-router-dom";

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
      </>
    ),
    index: true,
  },
  {
    element: <Layout />,
    children: [
      { path: "popular", element: <div>Popular</div>, index: true },
      { path: "news", element: <div>News</div>, index: true },
      { path: "debates", element: <div>Debates</div>, index: true },
    ],
  },
]);
