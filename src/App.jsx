import { Navbar } from "./components/navbar/NavBar";
import ItemListContainer from "./pages/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Hola Como estas?" />
    </div>
  );
}

export default App;
