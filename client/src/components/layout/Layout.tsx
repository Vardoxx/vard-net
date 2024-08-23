import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

const Layout = () => {
  const token = Cookies.get("token");

  const logOut = async () => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    Cookies.remove("token");
    window.location.href = "/";
  };

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <div className="w-full bg-slate-400">
        NavBar
        <button onClick={logOut}>Rm Token</button>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
