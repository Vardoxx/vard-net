import { useSelector } from "react-redux";
import { useGetNewsQuery } from "../../store/services/news.service";
import { RootState } from "../../store/store";
import { useEffect, useState } from "react";
import { NewsApi } from "../../types/newsApi";

const NewsCards = () => {
  const { data, error, isLoading } = useGetNewsQuery([]);
  const [array, setArray] = useState<NewsApi[]>([]);

  const sortBy = useSelector((state: RootState) => state.sortNews.sortBy);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const sortedArray = [...data];

      switch (sortBy) {
        case "":
          break;
        case "policy":
          sortedArray.sort((a, b) =>
            a.tags.includes("policy") ? -1 : b.tags.includes("policy") ? 1 : 0
          );
          break;
        case "bloger":
          sortedArray.sort((a, b) =>
            a.tags.includes("blogers") ? -1 : b.tags.includes("blogers") ? 1 : 0
          );
          break;
        case "game":
          sortedArray.sort((a, b) =>
            a.tags.includes("game") ? -1 : b.tags.includes("game") ? 1 : 0
          );
          break;
      }

      setArray(sortedArray);
    }
  }, [data, sortBy]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!data || !Array.isArray(data)) {
    return <div>No news available</div>;
  }

  return (
    <>
      {array.map((i) => (
        <div key={i.id} className="card">
          <div className="card__img">
            <img src={i.img} alt="" />
          </div>

          <div className="card__description">
            <h1>{i.description}</h1>
          </div>

          <div className="card__tag-container">
            {i.tags.map((tags) => (
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
