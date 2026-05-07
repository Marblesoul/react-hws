import { useEffect, useState } from 'react';

export function useJsonFetch<T = unknown>(
  url: string,
  opts?: RequestInit,
): [T | null, boolean, Error | null] {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    setData(null);
    setError(null);
    setLoading(true);

    fetch(url, { ...opts, signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText || 'Request failed'}`);
        }

        return response.json() as Promise<T>;
      })
      .then((json) => {
        setData(json);
      })
      .catch((fetchError: unknown) => {
        if (fetchError instanceof DOMException && fetchError.name === 'AbortError') {
          return;
        }

        setError(fetchError instanceof Error ? fetchError : new Error('Unknown request error'));
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, [url, opts]);

  return [data, loading, error];
}
