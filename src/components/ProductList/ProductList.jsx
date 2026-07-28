import Product from "../Product/Product";

import styles from "./ProductList.module.css";

function ProductList({
  products,
  cart,
  onAddToCart,
  onIncrementQuantity,
  onDecrementQuantity,
}) {
  return (
    <section className={styles.products}>
      <h1 className={`${styles.title} text-preset-1`}>Desserts</h1>

      <ul className={styles.list}>
        {products.map((product) => (
          <li className={styles.item} key={product.id}>
            <Product
              product={product}
              cart={cart}
              onAddToCart={onAddToCart}
              onIncrementQuantity={onIncrementQuantity}
              onDecrementQuantity={onDecrementQuantity}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductList;
