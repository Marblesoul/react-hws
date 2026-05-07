import { useEffect, useState } from 'react';
import { Details } from './components/Details';
import { List } from './components/List';
import type { UserPreview } from './types';

const USERS_URL =
  'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';

export default function App() {
  const [users, setUsers] = useState<UserPreview[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserPreview | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(USERS_URL, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка загрузки: ${response.status}`);
        }

        return response.json() as Promise<UserPreview[]>;
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((fetchError: unknown) => {
        if (fetchError instanceof DOMException && fetchError.name === 'AbortError') {
          return;
        }

        setError(fetchError instanceof Error ? fetchError.message : 'Не удалось загрузить список');
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <main className="app-shell">
      <h1>Users</h1>
      <div className="workspace">
        {loading && <section className="panel state">Загрузка списка...</section>}
        {error && <section className="panel state error">{error}</section>}
        {!loading && !error && (
          <List
            users={users}
            selectedId={selectedUser?.id ?? null}
            onSelect={setSelectedUser}
          />
        )}
        <Details info={selectedUser} />
      </div>
    </main>
  );
}
