import Product from "../Product/Product";
import products from "../../data/data.json";

import styles from "./ProductList.module.css";

function ProductList() {
  return (
    <section className={styles.products}>
      <h1 className={`${styles.title} text-preset-1`}>Desserts</h1>

      <ul className={styles.list}>
        {products.map((product) => (
          <li className={styles.item} key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductList;
