import styles from "./Product.module.css";

function Product({
  product,
  cart,
  onAddToCart,
  onIncrementQuantity,
  onDecrementQuantity,
}) {
  const productInCart = cart.find((item) => item.id === product.id);

  return (
    <article className={styles.product}>
      <div className={styles.media}>
        <picture>
          <source media="(min-width: 64em)" srcSet={product.image.desktop} />
          <source media="(min-width: 48em)" srcSet={product.image.tablet} />
          <img src={product.image.mobile} alt="" className={styles.image} />
        </picture>

        {productInCart ? (
          <div className={styles.btnControls}>
            <button
              type="button"
              className={styles.control}
              onClick={() => onDecrementQuantity(productInCart)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="2"
                fill="none"
                viewBox="0 0 10 2"
              >
                <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
              </svg>
            </button>
            <span className={`${styles.quantity} text-preset-4-bold`}>
              {productInCart.quantity}
            </span>
            <button
              type="button"
              className={styles.control}
              onClick={() => onIncrementQuantity(productInCart)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
              >
                <path
                  fill="#fff"
                  d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                />
              </svg>
            </button>
          </div>
        ) : (
          <button
            type="button"
            className={`${styles.btnAddToCart} text-preset-4-bold`}
            onClick={() => onAddToCart(product)}
          >
            <img
              src="/assets/images/icon-add-to-cart.svg"
              alt=""
              aria-hidden="true"
            />
            Add to Cart
          </button>
        )}
      </div>

      <div className={styles.details}>
        <p className={`${styles.category} text-preset-4`}>{product.category}</p>
        <h2 className={`${styles.title} text-preset-3`}>{product.name}</h2>
        <span className={`${styles.price} text-preset-3`}>
          ${product.price.toFixed(2)}
        </span>
      </div>
    </article>
  );
}

export default Product;
