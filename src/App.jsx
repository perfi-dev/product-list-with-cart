import { useEffect, useState } from "react";

import Main from "./components/Main/Main";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import Modal from "./components/Modal/Modal";

import timeout from "./utils/timeout";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/assets/data/data.json");
        await timeout(1000);
        const data = await res.json();

        setProducts(data);
      } catch (err) {
        console.log(err.message);
        setError("Failed to fetch products.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function handleAddToCart(product) {
    const cartItem = cart.find((item) => item.id === product.id);

    if (cartItem) {
      if (cartItem.quantity + 1 > product.stock) return;

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
    if (product.quantity <= 1) {
      handleRemoveItem(product);
      return;
    }

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  }

  function handleRemoveItem(product) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== product.id),
    );
  }

  function handleConfirmOrder() {
    setIsOpen(true);
  }

  function handleNewOrder() {
    setIsOpen(false);
    setCart([]);
  }

  return (
    <>
      <Main>
        <ProductList
          products={products}
          isLoading={isLoading}
          error={error}
          cart={cart}
          onAddToCart={handleAddToCart}
          onIncrementQuantity={handleIncrementQuantity}
          onDecrementQuantity={handleDecrementQuantity}
        />
        <Cart
          cart={cart}
          onRemoveItem={handleRemoveItem}
          onConfirmOrder={handleConfirmOrder}
        />
      </Main>

      {isOpen && <Modal onNewOrder={handleNewOrder} cart={cart} />}
    </>
  );
}

export default App;
