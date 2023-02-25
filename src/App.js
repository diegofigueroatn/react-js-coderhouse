import { Footer } from "./Components/Footer/Footer.jsx";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer.jsx";
import { ProductCard } from "./Components/ProductCard/ProductCard.jsx";

function App() {
  return (
    <div className="grid justify-items-center h-full">
      <Navbar />
      <ItemListContainer greeting={"Welcome Diego!"} />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <Footer />
    </div>
  );
}

export default App;
