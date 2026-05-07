import { RequestCard } from './RequestCard';

export function LoadingRequest() {
  return (
    <RequestCard
      description="Ответ задерживается на 5 секунд, видно состояние загрузки."
      title="GET /loading"
      url="http://localhost:7070/loading"
    />
  );
}
