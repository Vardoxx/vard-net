import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

const Layout = () => {
  const token = Cookies.get("token");

  // const logOut = async () => {
  //   await new Promise((resolve) => setTimeout(resolve, 100));
  //   Cookies.remove("token");
  //   window.location.href = "/";
  // };

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
