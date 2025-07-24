import React, { useState } from "react";
import { Link } from "react-router-dom";
import restaurantData from "../utils/resturantMockData";

const styles = {
  restaurantList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f0f2f5",
  },
  cardContainer: {
    width: "300px",
    margin: "20px",
    fontFamily: "Arial, sans-serif",
    borderRadius: "15px",
    backgroundColor: "#ffffff",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.09)",
    overflow: "hidden",
  },
  cardLink: { textDecoration: "none", color: "inherit" },
  cardImageWrapper: { position: "relative" },
  cardImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    display: "block",
  },
  cardOfferOverlay: {
    position: "absolute",
    bottom: "15px",
    left: "0",
    backgroundColor: "#ff5200",
    color: "white",
    padding: "8px 16px",
    fontWeight: "bold",
    fontSize: "14px",
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
  },
  cardDetails: { padding: "20px" },
  cardTitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    margin: "0 0 8px 0",
    color: "#282c3f",
  },
  cardInfo: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "1rem",
    fontWeight: "500",
    color: "#535665",
    marginBottom: "12px",
  },
  cardRating: { fontWeight: "600" },
  cardCuisine: { fontSize: "1rem", color: "#7e808c", marginBottom: "6px" },
  cardLocation: { fontSize: "1rem", color: "#7e808c" },
};

const RestaurantCard = ({ restaurant }) => {
  const { id, name, image, cuisine, rating, deliveryTime, offer, location } = restaurant;

  return (
    <div style={styles.cardContainer}>
      <Link to={`/restaurant/${id}`} style={styles.cardLink}>
        <div style={styles.cardImageWrapper}>
          <img style={styles.cardImage} src={image} alt={name} />
          <div style={styles.cardOfferOverlay}>{offer}</div>
        </div>
        <div style={styles.cardDetails}>
          <h3 style={styles.cardTitle}>{name}</h3>
          <div style={styles.cardInfo}>
            <span style={styles.cardRating}>⭐ {rating}</span>
            <span>• {deliveryTime}</span>
          </div>
          <div style={styles.cardCuisine}>{cuisine}</div>
          <div style={styles.cardLocation}>{location}</div>
        </div>
      </Link>
    </div>
  );
};

const ResturantList = () => {
  const [restaurants] = useState(restaurantData);

  return (
    <div style={styles.restaurantList}>
      {restaurants.map((rest) => (
        <RestaurantCard key={rest.id} restaurant={rest} />
      ))}
    </div>
  );
};

export default ResturantList;
