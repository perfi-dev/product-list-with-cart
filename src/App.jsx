import { useState } from "react";

import Main from "./components/Main/Main";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
// import Modal from "./components/Modal/Modal";

function App() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(product) {
    const inCart = cart.some((item) => item.id === product.id);

    if (inCart) {
      setCart((currentCart) =>
        currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
      return;
    }

    setCart((currentCart) => [...currentCart, { ...product, quantity: 1 }]);
  }

  function handleIncrementQuantity(product) {
    handleAddToCart(product);
  }

  function handleDecrementQuantity(product) {
    if (product.quantity <= 1) return;

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  }

  return (
    <>
      <Main>
        <ProductList
          cart={cart}
          onAddToCart={handleAddToCart}
          onIncrementQuantity={handleIncrementQuantity}
          onDecrementQuantity={handleDecrementQuantity}
        />
        <Cart cart={cart} />
      </Main>

      {/* <Modal /> */}
    </>
  );
}

export default App;
