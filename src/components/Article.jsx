import { useEffect, useState } from "react";

export default function Article({ article }) {
  const capitalizeWords = (text) => {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${article.id}`;

    async function fetchAuthor() {
      const resp = await fetch(url);
      const data = await resp.json();
      setAuthor(data);
    }
    fetchAuthor();
  }, [article]);

  return (
    <div className="article">
      <h3>{capitalizeWords(article.title)}</h3>

      {author && (
        <div className="author">
          <p>
            By <a href="/">{author.name}</a>
          </p>
        </div>
      )}

      <p>{article.body}</p>
    </div>
  );
}
