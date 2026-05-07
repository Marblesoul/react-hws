import { useEffect, useState } from 'react';
import type { DetailsProps, UserDetails } from '../types';

const DETAILS_URL =
  'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data';

export function Details({ info }: DetailsProps) {
  const [details, setDetails] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!info) {
      setDetails(null);
      setError(null);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    setDetails(null);
    setError(null);
    setLoading(true);

    fetch(`${DETAILS_URL}/${info.id}.json`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка загрузки: ${response.status}`);
        }

        return response.json() as Promise<UserDetails>;
      })
      .then((data) => {
        setDetails(data);
      })
      .catch((fetchError: unknown) => {
        if (fetchError instanceof DOMException && fetchError.name === 'AbortError') {
          return;
        }

        setError(fetchError instanceof Error ? fetchError.message : 'Не удалось загрузить детали');
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, [info?.id]);

  if (!info) {
    return null;
  }

  return (
    <section className="panel details-panel" aria-label="Детали пользователя">
      {loading && <div className="state">Загрузка деталей...</div>}
      {error && <div className="state error">{error}</div>}
      {details && (
        <>
          <img className="avatar" src={details.avatar} alt={details.name} />
          <div className="details-content">
            <h2>{details.name}</h2>
            <dl>
              <div>
                <dt>City</dt>
                <dd>{details.details.city}</dd>
              </div>
              <div>
                <dt>Company</dt>
                <dd>{details.details.company}</dd>
              </div>
              <div>
                <dt>Position</dt>
                <dd>{details.details.position}</dd>
              </div>
            </dl>
          </div>
        </>
      )}
    </section>
  );
}
