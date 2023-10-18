import "./App.css";
import CryptoTable from "./Component/CryptoTable";
import Herobar from "./Component/Herobar";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herobar />
      <CryptoTable />
    </div>
  );
}

export default App;
