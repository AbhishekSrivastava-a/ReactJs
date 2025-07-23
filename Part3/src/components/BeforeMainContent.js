import React, { useRef,} from 'react';
import foodCategories from '../utils/carouselMockData'; 

const BeforeMainContent = () => {
  const carouselRef = useRef(null);
  const scroll = (scrollOffset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  const styles = {
    container: {
      padding: "20px 40px",
      borderBottom: "1px solid #e0e0e0",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "10px",
    },
    title: { fontSize: "1.5rem", fontWeight: "bold", color: "#333" },
    controls: { display: "flex", gap: "10px" },
    arrowButton: {
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      backgroundColor: "#f0f0f0",
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    carousel: {
      display: "flex",
      listStyle: "none",
      padding: "10px 0",
      margin: 0,
      gap: "30px",
      overflowX: "auto",
      scrollbarWidth: "none",
    },
    carouselItem: { textAlign: "center" },
    itemLink: { textDecoration: "none", color: "inherit" },
    itemImage: { width: "150px", height: "180px", objectFit: "cover" },
  };

  const webkitScrollbarStyle = `.carousel::-webkit-scrollbar { display: none; }`;

  return (
    <div style={styles.container}>
      <style>{webkitScrollbarStyle}</style>

      <div style={styles.header}>
        <h2 style={styles.title}>What's on your mind?</h2>
        <div style={styles.controls}>
          <button style={styles.arrowButton} onClick={() => scroll(-300)}>
            &#x2190;
          </button>{" "}
          {/* Scroll Left */}
          <button style={styles.arrowButton} onClick={() => scroll(300)}>
            &#x2192;
          </button>{" "}
          {/* Scroll Right */}
        </div>
      </div>

      {/* 5. Attach the ref to the carousel list element */}
      <ul style={styles.carousel} className="carousel" ref={carouselRef}>
        {foodCategories.map((category) => (
          <li key={category.id} style={styles.carouselItem}>
            <a href="#" style={styles.itemLink}>
              <img
                src={category.image}
                alt={category.name}
                style={styles.itemImage}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default BeforeMainContent;