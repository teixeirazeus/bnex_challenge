import "./App.css";
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ProductPage from "./pages/product/ProductPage";
import { ModalProvider } from "./providers/modalProvider";
import { ProductRepositoryProvider } from "./providers/productProvider";

function App() {
  return (
      <ProductRepositoryProvider>
      <ModalProvider>
        <HashRouter>
            <Routes>
              <Route path="/" element={<ProductPage />} />
            </Routes>
            <Toaster />
        </HashRouter>
      </ModalProvider>
      </ProductRepositoryProvider>
    );
}

export default App;
