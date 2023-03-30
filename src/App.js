import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer.jsx";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer.jsx";
import { Form } from "./Components/Form/Form.jsx";
import { Cart } from "./Components/Cart/Cart.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="grid justify-items-center content-start h-full gap-2">
          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />

            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />

            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/form" element={<Form />} />

            <Route path="*" element={<h1> error 404: Not found </h1>} />
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
