import { useEffect, useState } from 'react';
import type { Entry } from '../types';
import styles from './StepsForm.module.css';

type Props = {
  editing: Entry | null;
  onSubmit: (entry: Entry, replace: boolean) => void;
  onCancel: () => void;
};

export default function StepsForm({ editing, onSubmit, onCancel }: Props) {
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');

  useEffect(() => {
    if (editing) {
      setDate(editing.date);
      setDistance(String(editing.distance));
    } else {
      setDate('');
      setDistance('');
    }
  }, [editing]);

  const isValid = date !== '' && Number(distance) > 0;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) return;
    onSubmit({ date, distance: Number(distance) }, editing !== null);
    setDate('');
    setDistance('');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label}>Дата (ДД.ММ.ГГ)</label>
        <input
          className={styles.input}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Пройдено км</label>
        <input
          className={styles.input}
          type="number"
          min="0.1"
          step="0.1"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
      </div>
      <div className={styles.btnWrap}>
        <button className={styles.btn} type="submit" disabled={!isValid}>
          OK
        </button>
        {editing && (
          <button className={`${styles.btn} ${styles.cancel}`} type="button" onClick={onCancel}>
            Отмена
          </button>
        )}
      </div>
    </form>
  );
}
