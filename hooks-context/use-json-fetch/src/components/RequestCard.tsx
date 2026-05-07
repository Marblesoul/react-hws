import { useJsonFetch } from '../hooks/useJsonFetch';

type ResponseData = {
  status: string;
};

type RequestCardProps = {
  title: string;
  description: string;
  url: string;
};

export function RequestCard({ title, description, url }: RequestCardProps) {
  const [data, loading, error] = useJsonFetch<ResponseData>(url);

  return (
    <article className="request-card">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <code>{url}</code>
      </div>

      <div className="result">
        <div className={`status-pill${loading ? ' loading' : ''}`}>
          {loading ? 'loading: true' : 'loading: false'}
        </div>

        {data && (
          <pre aria-label={`${title}: data`}>{JSON.stringify(data, null, 2)}</pre>
        )}

        {error && (
          <pre className="error" aria-label={`${title}: error`}>
            {error.message}
          </pre>
        )}
      </div>
    </article>
  );
}
