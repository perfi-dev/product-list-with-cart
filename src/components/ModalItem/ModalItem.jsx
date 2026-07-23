import styles from "./ModalItem.module.css";

function ModalItem({ item }) {
  return (
    <li className={styles.item}>
      <div className={styles.container}>
        <img src={item.image.thumbnail} alt="" className={styles.image} />

        <div className={styles.details}>
          <h3 className={`${styles.name} text-preset-4-bold`}>{item.name}</h3>

          <div className={styles.amount}>
            <span className={`${styles.quantity} text-preset-4-bold`}>
              {item.quantity}x
            </span>
            <span className={`${styles.price} text-preset-4`}>
              @ ${item.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <span className={`${styles.totalPrice} text-preset-3`}>
        ${(item.quantity * item.price).toFixed(2)}
      </span>
    </li>
  );
}

export default ModalItem;
