import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import type { NewsItem } from '../types';

const API_URL = 'http://localhost:7070';

export function NewsFeed() {
  const { authFetch } = useAuth();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    setError(null);

    authFetch(`${API_URL}/private/news`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка загрузки новостей: ${response.status}`);
        }

        return response.json() as Promise<NewsItem[]>;
      })
      .then((items) => {
        setNews(items);
      })
      .catch((newsError: unknown) => {
        if (newsError instanceof DOMException && newsError.name === 'AbortError') {
          return;
        }

        setError(newsError instanceof Error ? newsError.message : 'Не удалось загрузить новости');
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, [authFetch]);

  if (loading) {
    return <div className="feed-state">Loading news...</div>;
  }

  if (error) {
    return <div className="feed-state error">{error}</div>;
  }

  return (
    <main className="news-grid" aria-label="News feed">
      {news.map((item) => (
        <article className="news-card" key={item.id}>
          <img src={item.image} alt="" />
          <div>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        </article>
      ))}
    </main>
  );
}
