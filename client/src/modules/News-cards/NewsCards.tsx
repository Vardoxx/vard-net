import { useSelector } from "react-redux";
import { useGetNewsQuery } from "../../store/services/news.service";

import { RootState } from "../../store/store";

const NewsCards = () => {
  const sortBy = useSelector((state: RootState) => state.sortNews.sortBy);

  console.log("Current sort value:", sortBy);

  const { data, error, isLoading } = useGetNewsQuery([]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  if (!data || !Array.isArray(data)) {
    return <div>No news available</div>;
  }

  return (
    <>
      {data.map((i) => (
        <div onClick={() => console.log(sortBy)} key={i.id} className="card">
          <div className="card__img">
            <img src={i.src} alt="" />
          </div>

          <div className="card__description">
            <h1>{i.description}</h1>
          </div>

          <div className="card__tag-container">
            {i.tags.map((tag) => (
              <div key={tag} className="card-tag">
                {tag}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NewsCards;
