import {
  createBrowserRouter,
  Navigate,
  NavLink,
  Outlet,
} from "react-router-dom";
import AuthPage from "../pages/Auth-page/AuthPage";
import "../styles/App.css";

interface ProtectedRouteProps {
  block: boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ block }) => {
  if (block) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <div className="w-full bg-slate-400">NavBar</div>
      <Outlet />
    </>
  );
};

export const router = createBrowserRouter([
  { errorElement: <div className="text-red-600">Poshel naxuy</div> },
  {
    path: "/",
    element: (
      <>
        <AuthPage />
        <NavLink to="/guard/homepage">Home</NavLink>
      </>
    ),
    index: true,
  },
  {
    path: "guard",
    element: <ProtectedRoute block={true} />,
    children: [{ path: "homepage", element: <div>Home</div>, index: true }],
  },
]);
