import { useState, useEffect } from "react";
import restaurantData from "../utils/resturantMockData";

const styles = {
  restaurantList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f0f2f5",
  },
  buttonBar: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "24px",
  },
  button: {
    padding: "10px 16px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    background: "#fff",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "1rem",
  },
  cardContainer: {
    width: "300px",
    margin: "20px",
    fontFamily: "Arial, sans-serif",
    borderRadius: "15px",
    backgroundColor: "#ffffff",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.09)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
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

const RestaurantCard = (props) => {
  const { name, image, cuisine, rating, deliveryTime, offer, location } =
    props.restaurant;
  return (
    <div style={styles.cardContainer}>
      <a href="#" style={styles.cardLink}>
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
      </a>
    </div>
  );
};

const RestaurantList = () => {
  const [ListOfResturants, setListOfResturants] = useState(restaurantData);
  const [originalList, setOriginalList] = useState(restaurantData);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9628669&lng=77.57750899999999&carousel=true&third_party_vendor=1"
      );
      const json = await res.json();
      const restaurants =
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (restaurants && Array.isArray(restaurants)) {
        const parsed = restaurants.map((r) => ({
          name: r.info.name,
          image: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600/${r.info.cloudinaryImageId}`,
          cuisine: r.info.cuisines?.join(", "),
          rating: r.info.avgRating,
          deliveryTime: r.info.sla?.deliveryTime + " mins",
          offer: r.info.ribbon?.[0]?.text || "Great Offer",
          location: r.info.areaName,
          id: r.info.id,
        }));
        setListOfResturants(parsed);
        setOriginalList(parsed);
      }
    } catch (e) {}
  };

  return (
    <div>
      <div style={styles.buttonBar}>
        <button
          style={styles.button}
          onClick={() => {
            const filtered = ListOfResturants.filter(
              (restaurant) => restaurant.rating > 4
            );
            setListOfResturants(filtered);
          }}
        >
          ⭐ Top Rated
        </button>
        <button
          style={styles.button}
          onClick={() => {
            const sorted = [...ListOfResturants].sort(
              (a, b) => Number(a.rating) - Number(b.rating)
            );
            setListOfResturants(sorted);
          }}
        >
          📉 Rating Low to High
        </button>
        <button
          style={styles.button}
          onClick={() => {
            const sorted = [...ListOfResturants].sort(
              (a, b) => Number(b.rating) - Number(a.rating)
            );
            setListOfResturants(sorted);
          }}
        >
          📈 Rating High to Low
        </button>
        <button
          style={styles.button}
          onClick={() => setListOfResturants(originalList)}
        >
          🔁 Reset
        </button>
      </div>
      <div style={styles.restaurantList}>
        {ListOfResturants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
