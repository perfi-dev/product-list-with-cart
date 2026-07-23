import { useState } from "react";

import Main from "./components/Main/Main";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
// import Modal from "./components/Modal/Modal";

function App() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(product) {
    const inCart = cart.some((item) => item.id === product.id);

    if (inCart) return;

    setCart((currentCart) => [...currentCart, { ...product, quantity: 1 }]);
  }

  return (
    <>
      <Main>
        <ProductList cart={cart} onAddToCart={handleAddToCart} />
        <Cart cart={cart} />
      </Main>

      {/* <Modal /> */}
    </>
  );
}

export default App;
