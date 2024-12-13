import { Route, Routes } from "react-router-dom";
import "./App.css";
import ShopLayout from "./components/Shop-view/ShopLayout/ShopLayout";
import ShopMenu from "./components/Shop-view/ShopMenu/ShopMenu";

function App() {
  return (
    <div className="App w-screen h-screen bg-black overflow-hidden">
      <Routes>
        <Route path="/" element={<ShopLayout />}>
          <Route path="menu" element={<ShopMenu />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
