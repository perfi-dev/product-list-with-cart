function Product() {
  return (
    <article>
      <div>
        <picture>
          <source
            media="(min-width: 64em)"
            srcset="/assets/images/image-waffle-desktop.jpg"
          />
          <source
            media="(min-width: 48em)"
            srcset="/assets/images/image-waffle-tablet.jpg"
          />
          <img src="/assets/images/image-waffle-mobile.jpg" alt="" />
        </picture>

        <button type="button">
          <img
            src="/assets/images/icon-add-to-cart.svg"
            alt=""
            aria-hidden="true"
          />
          Add to Cart
        </button>
      </div>

      <div>
        <p>Waffle</p>
        <h2>Waffle with Berries</h2>
        <span>$6.50</span>
      </div>
    </article>
  );
}

export default Product;
