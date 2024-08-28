import { memo, useState } from "react";
import UsersList from "../../modules/Admin/UsersList";
import NewsList from "../../modules/Admin/NewsList";

const AdminPage = () => {
  const [selectCtg, setSelectCtg] = useState<string>("usersList");

  const Selecter = memo(() => {
    if (selectCtg === "usersList") return <UsersList />;
    if (selectCtg === "newsList") return <NewsList />;
  });

  return (
    <div className="wrapper">
      <header className="w-full p-8 flex items-center min-h-20 bg-white rounded-b-3xl">
        <ul className="flex w-full justify-around gap-6">
          <li
            onClick={() => setSelectCtg("usersList")}
            className="font-extrabold text-black cursor-pointer transition-all hover:scale-105"
          >
            Список пользователей
          </li>

          <li
            onClick={() => setSelectCtg("newsList")}
            className="font-extrabold text-black cursor-pointer transition-all hover:scale-105"
          >
            Список новостей
          </li>
        </ul>
      </header>
      <main className="pt-7">
        <Selecter />
      </main>
    </div>
  );
};

export default AdminPage;
