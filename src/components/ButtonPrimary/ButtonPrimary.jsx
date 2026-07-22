import styles from "./ButtonPrimary.module.css";

function ButtonPrimary({ children }) {
  return (
    <button className={`${styles.btnPrimary} text-preset-3`}>{children}</button>
  );
}

export default ButtonPrimary;
