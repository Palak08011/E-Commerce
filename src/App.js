import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import { useState } from "react";
function App() {
  const [count, setcount] = useState(0);

  const incFunHandler = () => {
    setcount(count + 1);
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar value={count} />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/womens"
            element={
              <ShopCategory incHandlerProp={incFunHandler} category="women" />
            }
          />
          <Route path="/mens" />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
