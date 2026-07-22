import Product from "../Product/Product";

import styles from "./ProductList.module.css";

function ProductList() {
  return (
    <section className={styles.products}>
      <h1 className={`${styles.title} text-preset-1`}>Desserts</h1>

      <ul className={styles.list}>
        <li className={styles.item}>
          <Product />
        </li>
      </ul>
    </section>
  );
}

export default ProductList;
