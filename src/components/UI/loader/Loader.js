import React from 'react';
import styles from './Loader.module.css';

function MyLoader({ children }) {
  return <div className={styles.loader} />;
}

export default MyLoader;
