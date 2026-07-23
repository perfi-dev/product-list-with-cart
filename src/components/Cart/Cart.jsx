import { useState } from "react";

import CartEmpty from "./CartEmpty";
import CartFilled from "./CartFilled";

import styles from "./Cart.module.css";

function Cart() {
  const [cart, setCart] = useState([]);

  return (
    <aside className={styles.cart}>
      <h2 className={`${styles.title} text-preset-2`}>Your Cart (0)</h2>

      {cart.length === 0 ? <CartEmpty /> : <CartFilled />}
    </aside>
  );
}

export default Cart;
