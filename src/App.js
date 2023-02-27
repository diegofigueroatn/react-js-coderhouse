import { Footer } from "./Components/Footer/Footer.jsx";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer.jsx";
import { ItemCount } from "./Components/ItemCount/ItemCount.jsx";

function App() {
  let stock = 5,
    initial = 1;

  const onAdd = (productsNumber) => {
    console.log(`${productsNumber} products were added to your cart`);
  };

  return (
    <div className="grid justify-items-center h-full gap-10">
      <Navbar></Navbar>
      <ItemListContainer />
      <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
      <Footer></Footer>
    </div>
  );
}

export default App;
