import "./App.scss";
import AllProductsContainer from "./components/AllProductsContainer";
import CartDisplay from "./components/CartDisplay";
function App() {
  return (
    <div className="App">
      <AllProductsContainer />
      <CartDisplay />
    </div>
  );
}

export default App;
