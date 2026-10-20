import React from 'react';
import styles from './GlassCard.module.css';

export const GlassCard = ({ title, description, children }) => {
  return (
    <div className={styles.card}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {description && <p className={styles.description}>{description}</p>}
      {children}
    </div>
  );
};