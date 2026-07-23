import CartItem from "../CartItem/CartItem";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

import styles from "./Cart.module.css";

function CartFilled() {
  return (
    <>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <CartItem />
        </li>
      </ul>

      <div className={styles.divider}></div>

      <div className={styles.orderTotalBox}>
        <p className={`${styles.orderTotalText} text-preset-4`}>Order Total</p>
        <span className={`${styles.orderTotalPrice} text-preset-2`}>
          $46.50
        </span>
      </div>

      <div className={styles.carbonBox}>
        <img
          src="/assets/images/icon-carbon-neutral.svg"
          alt=""
          aria-hidden="true"
          className={styles.carbonImage}
        />
        <p className={`${styles.carbonText} text-preset-4`}>
          This is a <span className="text-preset-4-bold">carbon-neutral</span>{" "}
          delivery
        </p>
      </div>

      <ButtonPrimary>Confirm Order</ButtonPrimary>
    </>
  );
}

export default CartFilled;
