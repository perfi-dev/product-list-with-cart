import styles from "./ModalItem.module.css";

function ModalItem() {
  return (
    <li className={styles.item}>
      <div className={styles.container}>
        <img
          src="../../../public/assets/images/image-tiramisu-thumbnail.jpg"
          alt=""
          className={styles.image}
        />

        <div className={styles.details}>
          <h3 className={`${styles.name} text-preset-4-bold`}>
            Classic Tiramisu
          </h3>

          <div className={styles.amount}>
            <span className={`${styles.quantity} text-preset-4-bold`}>1x</span>
            <span className={`${styles.price} text-preset-4`}>@ $5.50</span>
          </div>
        </div>
      </div>

      <span className={`${styles.totalPrice} text-preset-3`}>$5.50</span>
    </li>
  );
}

export default ModalItem;
