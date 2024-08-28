import {
  useDeleteNewMutation,
  useGetNewsQuery,
} from "../../store/services/news.service";

const NewsList = () => {
  const { data } = useGetNewsQuery([]);
  const [deleteNew] = useDeleteNewMutation();

  const removeNew = async (id: number) => {
    await deleteNew({ id });
  };

  const formatDate = (date: Date): string => {
    return new Date(date).toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  return (
    <>
      <div className="w-full h-min flex flex-col">
        <ul className="flex justify-between min-h-16 border-2  bg-white items-center">
          <li className="flex items-center justify-center p-3 text-xl min-w-8 min-h-16 border-r-2">
            ID
          </li>
          <li className="flex items-center justify-center p-3 text-md min-w-8 min-h-16 border-l-2 border-r-2">
            DESCRIPTION
          </li>
          <li className="flex items-center justify-center p-3 text-md min-w-8 min-h-16 border-l-2 border-r-2">
            TAGS
          </li>
          <li className="flex items-center justify-center p-3 text-md min-w-8 min-h-16 border-l-2">
            DATE
          </li>
        </ul>
        {data?.map((i) => (
          <ul
            key={i.id}
            className="flex justify-between min-h-16 border-2 border-gray-500 bg-slate-300 rounded-2xl items-center"
          >
            <li className="flex items-center justify-center p-3 text-xl min-w-8 min-h-16 border-r-2">
              {i.id}
            </li>
            <li className="flex flex-col flex-wrap text-wrap overflow-y-scroll p-3 text-md max-w-64 max-h-16 border-l-2 border-r-2">
              {i.description}
            </li>
            <li className="flex items-center justify-center p-3 text-md min-w-8 min-h-16 border-l-2 border-r-2">
              {i.tags}
            </li>
            <li className="flex items-center justify-center p-3 text-md min-w-8 min-h-16 border-l-2">
              {formatDate(i.createdAt)}
            </li>
            <button onClick={() => removeNew(i.id)}>Rm Post</button>
          </ul>
        ))}
      </div>
    </>
  );
};

export default NewsList;
