import Cookies from "js-cookie";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import { layoutItmes } from "./layout-components";

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
      <header className="flex items-center justify-center w-full min-h-20 sticky top-0 left-0 bg-white shadow-md shadow-black">
        <nav className="flex items-center justify-between h-full w-4/6 text-bl">
          {layoutItmes.map((i) => (
            <button
              key={i.id}
              className={`flex items-center border-2 gap-2 p-2 rounded-lg border${i.color}`}
            >
              <div className={`text-xl text${i.color}`}>{i.Icon}</div>
              <h1 className="text-lg font-bold">{i.title}</h1>
            </button>
          ))}
          <NavLink to="/profile">
            <div className="max-w-14">
              <img
                className=""
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
