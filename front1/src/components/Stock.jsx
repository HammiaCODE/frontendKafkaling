import { useState } from "react";
import "../components/Stock.css";

const initialStock = [
{
    id: 1,
    name: "Classic Red set",
    type: "Standard",
    price: 100,
    stock: 10,
},
{   id: 2, 
    name: "Classic Blue set", 
    type: "Standard", 
    price: 100, 
    stock: 5 },
{
    id: 3,
    name: "Classic Yellow set",
    type: "Standard",
    price: 100,
    stock: 15,
},
{   id: 4, 
    name: "Mystery Dice bag : Classics", 
    type: "Random", 
    price: 150, 
    stock: 0 
},
{   id: 5, 
    name: "Mystery Dice bag : Sparkly", 
    type: "Random", 
    price: 160, 
    stock: 5 
},
{   id: 6, 
    name: "Space themed set (glow in the dark)", 
    type: "Specialty", 
    price: 240, 
    stock: 6 
},
{   id: 7, 
    name: "Flower themed set", 
    type: "Specialty", 
    price: 200, 
    stock: 7 
},
{   id: 8, 
    name: "Cat themed set", 
    type: "Specialty", 
    price: 200, 
    stock: 2 
},
{   id: 9, 
    name: "LCD set", 
    type: "Premium", 
    price: 250, 
    stock: 8 
},
{   id: 10, 
    name: "Gilded set", 
    type: "Premium", 
    price: 250, 
    stock: 16 
},
];

function Stock() {
  const [stock, setStock] = useState(initialStock);

  const handleBuy = (id) => {
    setStock((prevStock) =>
      prevStock.map((item) =>
        item.id === id && item.stock > 0
          ? { ...item, stock: item.stock - 1 }
          : item,
      ),
    );
  };

  return (
    <div className="store-container">
      <h1>D&D Dice Stock</h1>

      <div className="dice-grid">
        {stock.map((item) => (
          <div key={item.id} className="dice-card">
            <h2>{item.name}</h2>
            <p>
              <strong>Type:</strong> {item.type}
            </p>
            <p>
              <strong>Price:</strong> ${item.price}
            </p>
            <p className={item.stock === 0 ? "out" : ""}>
              <strong>Stock:</strong> {item.stock}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stock;
