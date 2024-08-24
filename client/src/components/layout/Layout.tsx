import Cookies from "js-cookie";
import { FaFireAlt } from "react-icons/fa";
import { GiNewspaper } from "react-icons/gi";
import { ImBullhorn } from "react-icons/im";
import { Navigate, NavLink, Outlet } from "react-router-dom";

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
      <header className="flex items-center justify-center w-full min-h-20">
        <nav className="flex items-center justify-between h-full w-4/6">
          <NavLink
            className="flex items-center gap-2 layout-actives"
            to="popular"
          >
            <div>
              <FaFireAlt className="text-orange-600 text-4xl" />
            </div>
            <h1 className="text-4xl">Популярное</h1>
          </NavLink>

          <NavLink className="flex items-center gap-2 layout-actives" to="news">
            <div>
              <GiNewspaper className="text-yellow-200 text-4xl" />
            </div>
            <h1 className="text-4xl">Новости</h1>
          </NavLink>

          <NavLink
            className="flex items-center gap-2 layout-actives"
            to="debates"
          >
            <div>
              <ImBullhorn className="text-purple-400 text-4xl" />
            </div>
            <h1 className="text-4xl">Дебаты</h1>
          </NavLink>
        </nav>
      </header>
      <div className="wrapper">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
