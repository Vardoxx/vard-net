import { createBrowserRouter, Outlet } from "react-router-dom";
import AuthPage from "../pages/Auth-page/AuthPage";
import "../styles/App.css";

export const router = createBrowserRouter([
  { path: "/", element: <AuthPage />, index: true },
  {
    element: (
      <>
        <header className="max-w-full min-h-20">gfdgdfg</header>
        <Outlet />
      </>
    ),
    children: [{ path: "homepage", element: <div>Home</div> }],
    errorElement: <div className="text-red-600">Poshel naxuy</div>,
  },
]);
