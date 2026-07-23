import styles from "./ButtonPrimary.module.css";

function ButtonPrimary({ children, onClick }) {
  return (
    <button className={`${styles.btnPrimary} text-preset-3`} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonPrimary;
