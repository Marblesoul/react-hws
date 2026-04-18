import { useState } from 'react';
import { getRate, getFinalAmount } from '../utils/deposit';
import styles from './DepositCalc.module.css';

export default function DepositCalc() {
  const [amount, setAmount] = useState('');
  const [months, setMonths] = useState('');

  const a = Number(amount);
  const m = Number(months);
  const ready = a > 0 && m > 0;

  const rate = ready ? getRate(a, m) : null;
  const total = ready && rate !== null ? getFinalAmount(a, rate, m) : null;

  return (
    <div className={styles.card}>
      <div className={styles.field}>
        <label className={styles.label}>Сумма</label>
        <input
          className={styles.input}
          type="number"
          min="1"
          placeholder="100000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Срок (в месяцах)</label>
        <input
          className={styles.input}
          type="number"
          min="1"
          placeholder="12"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
        />
      </div>
      {ready && rate !== null && total !== null && (
        <div className={styles.result}>
          <p className={styles.resultRow}>
            Ваша процентная ставка: <span>{rate}%</span>
          </p>
          <p className={styles.resultRow}>
            Сумма к окончанию срока: <span>{total.toFixed(2)} ₽</span>
          </p>
        </div>
      )}
    </div>
  );
}
