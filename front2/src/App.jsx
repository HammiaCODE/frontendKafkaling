import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/ui/Header";
import Catalogue from "./components/Catalogue";
import CustomOrder from "./components/CustomOrder";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);

      if (existing) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Catalogue addToCart={addToCart} />} />
        <Route path="/order" element={<CustomOrder />} />
        <Route path="/buy" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </>
  );
}

export default App;