import Features from "./components/Features";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Products from "./components/Products";
import Shop from "./components/Shop";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Features />
      <Products />
      <Shop />
      <ProductList />
    </div>
  );
}

export default App;
