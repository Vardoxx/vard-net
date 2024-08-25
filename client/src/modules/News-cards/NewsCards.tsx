import { useGetNewsQuery } from "../../store/services/news.service";

const NewsCards = () => {
  const { data, error, isLoading } = useGetNewsQuery([]);
  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  if (!data || !Array.isArray(data)) {
    return <div>No news available</div>;
  }

  return (
    <>
      {data.map((i) => (
        <div key={i.id} className="card">
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
