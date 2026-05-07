import { ErrorRequest } from './components/ErrorRequest';
import { LoadingRequest } from './components/LoadingRequest';
import { SuccessRequest } from './components/SuccessRequest';

export default function App() {
  return (
    <main className="app-shell">
      <header>
        <p className="eyebrow">Custom hook</p>
        <h1>useJsonFetch</h1>
      </header>

      <section className="requests" aria-label="Примеры запросов">
        <SuccessRequest />
        <ErrorRequest />
        <LoadingRequest />
      </section>
    </main>
  );
}
