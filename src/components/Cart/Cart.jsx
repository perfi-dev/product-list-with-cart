import CartEmpty from "./CartEmpty";
import CartFilled from "./CartFilled";

import styles from "./Cart.module.css";

function Cart({ cart }) {
  return (
    <aside className={styles.cart}>
      <h2 className={`${styles.title} text-preset-2`}>Your Cart (0)</h2>

      {cart.length === 0 ? <CartEmpty /> : <CartFilled />}
    </aside>
  );
}

export default Cart;
