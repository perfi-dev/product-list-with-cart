import ModalItem from "../ModalItem/ModalItem";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

import styles from "./Modal.module.css";

function Modal() {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <header className={styles.header}>
          <img
            src="/assets/images/icon-order-confirmed.svg"
            alt=""
            className={styles.image}
          />

          <div className={styles.info}>
            <h2 className={`${styles.title} text-preset-1`}>Order Confirmed</h2>
            <p className={styles.message}>We hope you enjoy your food!</p>
          </div>
        </header>

        <div className={styles.order}>
          <ul className={styles.list}>
            <ModalItem />
            <ModalItem />
            <ModalItem />
          </ul>

          <div className={styles.divider}></div>

          <div className={styles.total}>
            <p className={`${styles.text} text-preset-4`}>Order Total</p>
            <span className={`${styles.totalPrice} text-preset-2`}>$46.50</span>
          </div>
        </div>

        <ButtonPrimary>Start New Order</ButtonPrimary>
      </div>
    </div>
  );
}

export default Modal;
