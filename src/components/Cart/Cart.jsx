import CartEmpty from "./CartEmpty";
import CartFilled from "./CartFilled";

import styles from "./Cart.module.css";

function Cart({ cart, onRemoveItem }) {
  const cartQuantity = cart.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <aside className={styles.cart}>
      <h2 className={`${styles.title} text-preset-2`}>
        Your Cart ({cartQuantity})
      </h2>

      {cart.length === 0 ? (
        <CartEmpty />
      ) : (
        <CartFilled cart={cart} onRemoveItem={onRemoveItem} />
      )}
    </aside>
  );
}

export default Cart;
