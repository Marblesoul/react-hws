import { RequestCard } from './RequestCard';

export function SuccessRequest() {
  return (
    <RequestCard
      description="Успешный ответ сервера с JSON-данными."
      title="GET /data"
      url="http://localhost:7070/data"
    />
  );
}
