import { useGetAllUsersQuery } from "../../store/services/auth.service";

const UsersList = () => {
  const { data } = useGetAllUsersQuery([]);

  return (
    <div className="w-full h-min flex flex-col">
      {data?.map((i) => (
        <ul
          key={i.id}
          className="flex justify-between min-h-16 border-2 border-gray-500 bg-slate-300 rounded-2xl items-center"
        >
          <li className="flex items-center justify-center p-3 text-xl min-w-8 min-h-16 border-r-2">
            {i.id}
          </li>
          <li className="flex items-center justify-center p-3 text-md min-w-8 min-h-16 border-l-2 border-r-2">
            {i.email}
          </li>
          <li className="flex items-center justify-center p-3 text-md min-w-8 min-h-16 border-l-2 border-r-2">
            {i.userName}
          </li>
          <li className="flex items-center justify-center p-3 text-md min-w-8 min-h-16 border-l-2">
            {i.role}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default UsersList;
