import Cookies from "js-cookie";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import LayoutSortingBar from "../../modules/Layout-sorting/LayoutSortingBar";

const Layout = () => {
  const token = Cookies.get("token");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <header className="flex items-center justify-center w-full min-h-20 sticky top-0 left-0 bg-white shadow-md shadow-black z-50">
        <nav className="flex items-center justify-between h-full w-10/12 text-bl">
          <LayoutSortingBar />

          <NavLink to="/profile">
            <div className="max-w-14">
              <img
                style={{ borderRadius: "50%" }}
                src="https://avatars.githubusercontent.com/u/169776059?v=4"
                alt="ava"
              />
            </div>
          </NavLink>
        </nav>
      </header>
      <div className="wrapper mt-12">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
