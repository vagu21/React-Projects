import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category, country }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=b3185d87da2d4f1ca8d604203dfbde2d`)
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, [category, country]);

  return (
    <div>
      <h2 className="text-center mb-4">Latest <span className="badge bg-danger">News</span></h2>
      {
        articles.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })
      }
    </div>
  );
}

export default NewsBoard;
