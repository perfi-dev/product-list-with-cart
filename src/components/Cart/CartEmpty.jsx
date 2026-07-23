import styles from "./Cart.module.css";

function CartEmpty() {
  return (
    <div className={styles.content}>
      <img
        src="/assets/images/illustration-empty-cart.svg"
        alt=""
        className={styles.image}
      />
      <p className={`${styles.text} text-preset-4-bold`}>
        Your added items will appear here
      </p>
    </div>
  );
}

export default CartEmpty;
