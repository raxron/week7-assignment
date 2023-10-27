import "./styles.css";
import { useState, useEffect } from "react";
import Article from "./components/Article";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const url = `https://jsonplaceholder.typicode.com/posts/`;
    async function fetchArticles() {
      const resp = await fetch(url);
      const data = await resp.json();
      setArticles(data);
      setLoading(false);
    }
    setTimeout(() => {
      fetchArticles();
    }, 2000);
  }, []);

  return (
    <div className="App">
      <h1 className="title">Recent Posts</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {articles.map((article) => (
            <Article key={article.div} article={article} />
          ))}
        </>
      )}
    </div>
  );
}
