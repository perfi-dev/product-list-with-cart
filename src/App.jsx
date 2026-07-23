import Main from "./components/Main/Main";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
// import Modal from "./components/Modal/Modal";

function App() {
  return (
    <>
      <Main>
        <ProductList />
        <Cart />
      </Main>

      {/* <Modal /> */}
    </>
  );
}

export default App;
