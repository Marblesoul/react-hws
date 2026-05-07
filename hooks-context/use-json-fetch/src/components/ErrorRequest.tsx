import { RequestCard } from './RequestCard';

export function ErrorRequest() {
  return (
    <RequestCard
      description="Сервер отвечает статусом 500, хук возвращает Error."
      title="GET /error"
      url="http://localhost:7070/error"
    />
  );
}
