import { Navbar } from "./components/navbar/NavBar";
import ItemListContainer from "./pages/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Ecommerce de arbitros" />
    </div>
  );
}

export default App;
