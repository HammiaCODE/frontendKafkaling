import { useState } from "react";
import "./Catalogue.css";

const initialCatalogue = [
  { id: 1, name: "Classic Red set", type: "Standard", price: 100, catalogue: 10 },
  { id: 2, name: "Classic Blue set", type: "Standard", price: 100, catalogue: 5 },
  { id: 3, name: "Classic Yellow set", type: "Standard", price: 100, catalogue: 15 },
  { id: 4, name: "Mystery Dice bag : Classics", type: "Random", price: 150, catalogue: 0 },
  { id: 5, name: "Mystery Dice bag : Sparkly", type: "Random", price: 160, catalogue: 5 },
  { id: 6, name: "Space themed set (glow in the dark)", type: "Specialty", price: 240, catalogue: 6 },
  { id: 7, name: "Flower themed set", type: "Specialty", price: 200, catalogue: 7 },
  { id: 8, name: "Cat themed set", type: "Specialty", price: 200, catalogue: 2 },
  { id: 9, name: "LCD set", type: "Premium", price: 250, catalogue: 8 },
  { id: 10, name: "Gilded set", type: "Premium", price: 250, catalogue: 16 },
];

function Catalogue({ addToCart }) {
  const [catalogue, setCatalogue] = useState(initialCatalogue);

  const handleBuy = (id) => {
    setCatalogue((prevCatalogue) =>
      prevCatalogue.map((item) =>
        item.id === id && item.catalogue > 0
          ? { ...item, catalogue: item.catalogue - 1 }
          : item
      )
    );

    const selectedItem = catalogue.find((item) => item.id === id);
    if (selectedItem && selectedItem.catalogue > 0) {
      addToCart(selectedItem);
    }
  };

  return (
    <div className="store-container">

      <div className="dice-grid">
        {catalogue.map((item) => (
          <div key={item.id} className="dice-card">
            <h2>{item.name}</h2>

            <p><strong>Type:</strong> {item.type}</p>
            <p><strong>Price:</strong> ${item.price}</p>

            <p className={item.catalogue === 0 ? "out" : ""}>
              <strong>Stock:</strong> {item.catalogue}
            </p>

            <button
              onClick={() => handleBuy(item.id)}
              disabled={item.catalogue === 0}
              className="buy-button"
            >
              {item.catalogue === 0 ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogue;