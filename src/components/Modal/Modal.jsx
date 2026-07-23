import ModalItem from "../ModalItem/ModalItem";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

function Modal() {
  return (
    <div>
      <div>
        <div>
          <img src="/assets/images/icon-order-confirmed.svg" alt="" />

          <div>
            <h2>Order Confirmed</h2>
            <p>We hope you enjoy your food!</p>
          </div>
        </div>

        <div>
          <ul>
            <ModalItem />
            <ModalItem />
            <ModalItem />
          </ul>

          <div></div>

          <div>
            <p>Order Total</p>
            <span>$46.50</span>
          </div>
        </div>

        <ButtonPrimary>Start New Order</ButtonPrimary>
      </div>
    </div>
  );
}

export default Modal;
