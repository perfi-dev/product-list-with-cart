import styles from "./CartItem.module.css";

function CartItem({ item }) {
  return (
    <article className={styles.item}>
      <div className={styles.itemDetails}>
        <h3 className={`${styles.itemName} text-preset-4-bold`}>{item.name}</h3>

        <div className={styles.itemAmount}>
          <span className={`${styles.itemQuantity} text-preset-4-bold`}>
            {item.quantity}x
          </span>
          <span className={`${styles.itemPrice} text-preset-4`}>
            @ ${item.price.toFixed(2)}
          </span>
          <span className={`${styles.itemTotalPrice} text-preset-4-bold`}>
            ${(item.quantity * item.price).toFixed(2)}
          </span>
        </div>
      </div>

      <button type="button" className={styles.btnRemoveItem}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="#CAAFA7"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
          />
        </svg>
      </button>
    </article>
  );
}

export default CartItem;
