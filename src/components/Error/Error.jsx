import styles from "./Error.module.css";

function Error({ error }) {
  return (
    <div className={styles.container}>
      <p className={`${styles.message} text-preset-3`}>⛔ {error}</p>
    </div>
  );
}

export default Error;
