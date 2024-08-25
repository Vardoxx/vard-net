import Cookies from "js-cookie";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import { layoutItmes } from "./layout-items";

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
      <header className="flex items-center justify-center w-full min-h-20 sticky top-0 left-0 bg-white shadow-md shadow-black z-50">
        <nav className="flex items-center justify-between h-full w-10/12 text-bl">
          {layoutItmes.map((i) => (
            <div
              key={i.id}
              className={`flex cursor-pointer items-center border-2 gap-2 p-2 rounded-lg ${i.border} transition-all hover:scale-105 active:bg-gray-300`}
            >
              <div className={`text-xl ${i.color}`}>{i.Icon}</div>
              <h1 className="text-lg font-bold">{i.title}</h1>
            </div>
          ))}
          <NavLink to="/profile" onClick={logOut}>
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
