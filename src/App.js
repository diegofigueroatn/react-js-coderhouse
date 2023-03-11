import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer.jsx";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="grid justify-items-center content-start h-full gap-2">
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />

          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />

          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

          <Route path="*" element={<h1> error 404: Not found </h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
