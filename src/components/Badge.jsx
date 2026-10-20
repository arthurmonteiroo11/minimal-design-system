import React from 'react';
import styles from './Badge.module.css';

export const Badge = ({ children, status = 'neutral' }) => {
  return (
    <span className={`${styles.badge} ${styles[status]}`}>
      <span className={styles.dot} />
      {children}
    </span>
  );
};