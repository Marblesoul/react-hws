import { useState } from 'react';
import StepsForm from './components/StepsForm';
import StepsTable from './components/StepsTable';
import { upsertEntry, removeEntry } from './utils/entries';
import type { Entry } from './types';
import './App.css';

export default function App() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [editing, setEditing] = useState<Entry | null>(null);

  function handleSubmit(entry: Entry, replace: boolean) {
    setEntries((prev) => upsertEntry(prev, entry, replace));
    setEditing(null);
  }

  function handleEdit(entry: Entry) {
    setEditing(entry);
  }

  function handleDelete(date: string) {
    setEntries((prev) => removeEntry(prev, date));
    if (editing?.date === date) setEditing(null);
  }

  return (
    <div className="container">
      <h1>Учёт тренировок</h1>
      <StepsForm editing={editing} onSubmit={handleSubmit} onCancel={() => setEditing(null)} />
      <StepsTable entries={entries} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}
