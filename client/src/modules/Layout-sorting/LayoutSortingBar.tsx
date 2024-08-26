import { ChangeEvent } from "react";
import { sortByName, sortByTag } from "../../store/slices/sort.slice";
import { layoutBarItems } from "./sortingBarItems";
import { useDispatch } from "react-redux";

const LayoutSorting = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-72 gap-1 flex flex-wrap items-center">
        {layoutBarItems.map((i) => (
          <div
            onClick={() => dispatch(sortByTag(i.sortValue))}
            key={i.id}
            className={`flex cursor-pointer items-center border-2 gap-2 p-1 rounded-lg ${i.border} transition-all hover:scale-105 active:bg-gray-300`}
          >
            <div className={`text-xl ${i.color}`}>{i.Icon}</div>
            <h1 className="text-sm font-bold">{i.title}</h1>
          </div>
        ))}
      </div>

      <div className="max-w-full">
        <input
          type="text"
          className="w-full text-sm bg-slate-200 p-2 rounded-3xl"
          placeholder="Поиск по названию..."
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            dispatch(sortByName(e.target.value))
          }
        />
      </div>
    </>
  );
};

export default LayoutSorting;
