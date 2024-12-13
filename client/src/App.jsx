import { Route, Routes } from "react-router-dom";
import "./App.css";
import ShopLayout from "./components/Shop-view/ShopLayout/ShopLayout";

function App() {
  return (
    <div className="App w-screen h-screen bg-black overflow-hidden">
      <Routes>
        <Route path="/" element={<ShopLayout />} />
      </Routes>
    </div>
  );
}

export default App;
