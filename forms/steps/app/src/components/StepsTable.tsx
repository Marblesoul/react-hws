import type { Entry } from '../types';
import styles from './StepsTable.module.css';

type Props = {
  entries: Entry[];
  onEdit: (entry: Entry) => void;
  onDelete: (date: string) => void;
};

function formatDate(iso: string): string {
  return new Date(iso + 'T00:00:00').toLocaleDateString('ru-RU');
}

export default function StepsTable({ entries, onEdit, onDelete }: Props) {
  if (entries.length === 0) return null;

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Дата (ДД.ММ.ГГ)</th>
            <th>Пройдено км</th>
            <th>Действия</th>
          </tr>
        </thead>
      </table>
      <div className={styles.card}>
        <table className={styles.table}>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry.date}>
                <td>{formatDate(entry.date)}</td>
                <td>{entry.distance}</td>
                <td className={styles.actions}>
                  <button className={styles.iconBtn} onClick={() => onEdit(entry)} title="Редактировать">
                    ✎
                  </button>
                  <button className={styles.iconBtn} onClick={() => onDelete(entry.date)} title="Удалить">
                    ✘
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
