import type { UserPreview } from '../types';

type ListProps = {
  users: UserPreview[];
  selectedId: number | null;
  onSelect: (user: UserPreview) => void;
};

export function List({ users, selectedId, onSelect }: ListProps) {
  return (
    <section className="panel list-panel" aria-label="Список пользователей">
      {users.map((user) => (
        <button
          className={`user-button${selectedId === user.id ? ' active' : ''}`}
          key={user.id}
          onClick={() => {
            if (selectedId !== user.id) {
              onSelect(user);
            }
          }}
          type="button"
        >
          {user.name}
        </button>
      ))}
    </section>
  );
}
