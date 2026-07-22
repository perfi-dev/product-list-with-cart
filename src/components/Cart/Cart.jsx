import styles from "./Cart.module.css";

function Cart() {
  return (
    <aside className={styles.cart}>
      <h2 className={`${styles.title} text-preset-2`}>Your Cart (0)</h2>

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
    </aside>
  );
}

export default Cart;
