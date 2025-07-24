import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { menuData } from "../utils/mockMenuData";
import restaurantData from "../utils/resturantMockData";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurantId = Number(id);

  const restaurant = restaurantData.find((r) => r.id === restaurantId);

  const [showVeg, setShowVeg] = useState(true);
  const [cart, setCart] = useState({});

  const menu = menuData[restaurantId] || { veg: [], nonveg: [] };
  const itemsToShow = showVeg ? menu.veg : menu.nonveg;

  const addToCart = (itemId) => {
    setCart((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => {
      if (!prev[itemId]) return prev;
      const newCart = { ...prev };
      if (newCart[itemId] === 1) {
        delete newCart[itemId];
      } else {
        newCart[itemId] -= 1;
      }
      return newCart;
    });
  };

  return (
    <div style={{ maxWidth: 600, margin: "20px auto", padding: "0 20px" }}>
      <h1>Menu for {restaurant ? restaurant.name : `Restaurant no ${restaurantId}`}</h1>

      <div style={{ marginBottom: 15 }}>
        <button onClick={() => setShowVeg(true)} disabled={showVeg}>
          Veg
        </button>
        <button onClick={() => setShowVeg(false)} disabled={!showVeg} style={{ marginLeft: 10 }}>
          Non-Veg
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {itemsToShow.length === 0 && <li>No items available</li>}
        {itemsToShow.map(({ id, name, price }) => (
          <li key={id} style={{ marginBottom: 10, display: "flex", justifyContent: "space-between" }}>
            <div>
              {name} - ₹{price}
            </div>
            <div>
              <button onClick={() => removeFromCart(id)} disabled={!cart[id]}>
                -
              </button>
              <span style={{ margin: "0 10px" }}>{cart[id] || 0}</span>
              <button onClick={() => addToCart(id)}>+</button>
            </div>
          </li>
        ))}
      </ul>

      <h3>Cart Summary</h3>
      {Object.keys(cart).length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {Object.entries(cart).map(([itemId, qty]) => {
            const item = menu.veg.find(i => i.id === itemId) || menu.nonveg.find(i => i.id === itemId);
            return (
              <li key={itemId}>
                {item.name} x {qty} = ₹{item.price * qty}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default RestaurantMenu;