import Cookies from "js-cookie";

const ProfilePage = () => {
  const userName = Cookies.get("userName");
  const email = Cookies.get("email");
  const role = Cookies.get("role");

  const logOut = async () => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    Cookies.remove("token");
    window.location.href = "/";
  };

  return (
    <div className="flex w-full h-min p-6 gap-6 rounded-3xl bg-white">
      <div className="w-1/4 h-min">
        <img
          className="rounded-full"
          src="https://avatars.githubusercontent.com/u/169776059?v=4"
          alt="ava"
        />
      </div>
      <ul className="flex flex-col gap-3">
        <li>Имя: {userName}</li>
        <li>Почта: {email}</li>
        <li>Роль: {role}</li>
        <li>
          {role === "admin" ? (
            <button className="btn">Create Post</button>
          ) : null}
        </li>
        <li>
          <button onClick={logOut} className="bg-red-600 btn">
            Выйти
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProfilePage;
