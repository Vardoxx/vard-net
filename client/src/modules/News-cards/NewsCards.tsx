import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetNewsQuery } from "../../store/services/news.service";
import { RootState } from "../../store/store";
import { NewsApi } from "../../types/newsApi";

const NewsCards = () => {
  const { data, error, isLoading } = useGetNewsQuery([]);

  const [filteredArray, setFilteredArray] = useState<NewsApi[]>([]);

  const sortByTag = useSelector((state: RootState) => state.sortNews.sortByTag);
  const sortByName = useSelector(
    (state: RootState) => state.sortNews.sortByName
  );
  useEffect(() => {
    if (data && Array.isArray(data)) {
      let arrayToSort = [...data];

      if (sortByTag) {
        switch (sortByTag) {
          case "policy":
            arrayToSort.sort((a, b) =>
              a.tags.includes("политика")
                ? -1
                : b.tags.includes("политика")
                ? 1
                : 0
            );
            break;
          case "blogers":
            arrayToSort.sort((a, b) =>
              a.tags.includes("блогеры")
                ? -1
                : b.tags.includes("блогеры")
                ? 1
                : 0
            );
            break;
          case "games":
            arrayToSort.sort((a, b) =>
              a.tags.includes("игры") ? -1 : b.tags.includes("игры") ? 1 : 0
            );
            break;
        }
      }

      if (sortByName) {
        arrayToSort = arrayToSort.filter((i) =>
          i.description.toLowerCase().includes(sortByName.toLowerCase())
        );
        arrayToSort.sort((a, b) =>
          a.description.toLowerCase().localeCompare(b.description.toLowerCase())
        );
      }

      setFilteredArray(arrayToSort);
    }
  }, [data, sortByTag, sortByName]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!data || !Array.isArray(data)) {
    return <div>No news available</div>;
  }

  return (
    <>
      {filteredArray.map((item) => (
        <div key={item.id} className="card">
          <div className="card__img">
            <img src={item.img} alt="" />
          </div>

          <div className="card__description">
            <h1>{item.description}</h1>
          </div>

          <div className="card__tag-container">
            {item.tags.map((tags) => (
              <div key={tags} className="card-tag">
                {tags}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NewsCards;
