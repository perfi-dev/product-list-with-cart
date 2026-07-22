import ModalItem from "../ModalItem/ModalItem";

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
            <li>
              <ModalItem />
            </li>
          </ul>

          <div></div>

          <div>
            <p>Order Total</p>
            <span>$46.50</span>
          </div>
        </div>

        <ButtonPrimary />
      </div>
    </div>
  );
}

export default Modal;
