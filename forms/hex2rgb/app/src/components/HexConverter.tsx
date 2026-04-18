import { useState } from 'react';
import styles from './HexConverter.module.css';

const HEX_REGEX = /^#[0-9a-fA-F]{6}$/;

type Rgb = { r: number; g: number; b: number };

function parseHex(hex: string): Rgb {
  return {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16),
  };
}

export default function HexConverter() {
  const [value, setValue] = useState('');

  const isComplete = value.length === 7;
  const isValid = isComplete && HEX_REGEX.test(value);
  const isError = isComplete && !isValid;

  const rgb: Rgb | null = isValid ? parseHex(value) : null;

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: isError ? '#e53935' : rgb ? value : '#f0f0f0' }}
    >
      <div className={styles.card}>
        <h2 className={styles.title}>HEX → RGB</h2>
        <input
          className={`${styles.input}${isError ? ' ' + styles.error : ''}`}
          type="text"
          maxLength={7}
          placeholder="#ffffff"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className={styles.result}>
          {rgb && `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`}
        </div>
        <div className={styles.errorMsg}>
          {isError && 'ОШИБКА: Неверный формат HEX'}
        </div>
      </div>
    </div>
  );
}
