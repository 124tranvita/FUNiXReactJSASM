import styles from './Error.module.css';

function Error({ error }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.error}>
        <img src="/assets/images/problem.svg" alt="problem" width="64" height="64" />
        <div className="text-muted">{error}</div>
      </div>
    </div>
  );
}

export default Error;
