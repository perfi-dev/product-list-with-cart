import styles from "./Product.module.css";

function Product({ product }) {
  return (
    <article className={styles.product}>
      <div className={styles.media}>
        <picture>
          <source media="(min-width: 64em)" srcset={product.image.desktop} />
          <source media="(min-width: 48em)" srcset={product.image.tablet} />
          <img src={product.image.mobile} alt="" className={styles.image} />
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
