import styles from "./Cart.module.css";
import CartEmpty from "./CartEmpty";

function Cart() {
  return (
    <aside className={styles.cart}>
      <h2 className={`${styles.title} text-preset-2`}>Your Cart (0)</h2>

      <CartEmpty />
    </aside>
  );
}

export default Cart;
