import { useState } from 'react';
import { fileToDataUrl } from '../utils/fileToDataUrl';
import styles from './PhotoManager.module.css';

export default function PhotoManager() {
  const [photos, setPhotos] = useState<string[]>([]);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.length) return;
    const urls = await Promise.all(Array.from(e.target.files).map(fileToDataUrl));
    setPhotos((prev) => [...prev, ...urls]);
    e.target.value = '';
  }

  function handleRemove(index: number) {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div>
      <div className={styles.dropzone}>
        <input
          className={styles.fileInput}
          type="file"
          accept="image/*"
          multiple
          onChange={handleChange}
        />
        <span className={styles.label}>Click to select</span>
      </div>

      {photos.length > 0 && (
        <div className={styles.gallery}>
          {photos.map((url, i) => (
            <div key={i} className={styles.thumb}>
              <img src={url} alt="" />
              <button className={styles.removeBtn} onClick={() => handleRemove(i)}>
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
