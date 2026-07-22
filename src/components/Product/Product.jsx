import styles from "./Product.module.css";

function Product() {
  return (
    <article className={styles.product}>
      <div className={styles.media}>
        <picture>
          <source
            media="(min-width: 64em)"
            srcset="/assets/images/image-waffle-desktop.jpg"
          />
          <source
            media="(min-width: 48em)"
            srcset="/assets/images/image-waffle-tablet.jpg"
          />
          <img
            src="/assets/images/image-waffle-mobile.jpg"
            alt=""
            className={styles.image}
          />
        </picture>

        <button
          type="button"
          className={`${styles.btnAddToCart} text-preset-4-bold`}
        >
          <img
            src="/assets/images/icon-add-to-cart.svg"
            alt=""
            aria-hidden="true"
          />
          Add to Cart
        </button>
      </div>

      <div className={styles.details}>
        <p className={`${styles.category} text-preset-4`}>Waffle</p>
        <h2 className={`${styles.title} text-preset-3`}>Waffle with Berries</h2>
        <span className={`${styles.price} text-preset-3`}>$6.50</span>
      </div>
    </article>
  );
}

export default Product;
