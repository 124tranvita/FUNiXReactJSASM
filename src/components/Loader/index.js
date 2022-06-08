import styles from './Loader.module.css';

export const PageLoader = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.loader}></div>
    </div>
  );
};

export const CardLoader = ({ height }) => {
  return (
    <div className={styles.loaderWrapper} style={{ height: height }}>
      <div className={styles.loader}></div>
    </div>
  );
};
