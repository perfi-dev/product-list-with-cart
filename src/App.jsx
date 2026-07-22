import Main from "./components/Main/Main";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Main>
        <ProductList />
        <Cart />
      </Main>
    </>
  );
}

export default App;
