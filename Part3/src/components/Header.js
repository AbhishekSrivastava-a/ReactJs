const navItems = [
  { id: 1, text: "Search", link: "/search" },
  { id: 2, text: "Offers", link: "/offers" },
  { id: 3, text: "Help", link: "/help" },
  { id: 4, text: "Sign In", link: "/signin" },
  { id: 5, text: "Cart", link: "/cart" },
];
const Header = () => {
  const styles = {
    headerContainer: {
      backgroundColor: "#ffffff",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.07)",
      padding: "0 20px",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      fontFamily: "Arial, sans-serif",
    },
    headerContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "1200px",
      margin: "0 auto",
      height: "80px",
    },
    logoImage: {
      height: "50px",
    },
    nav: {},
    navList: {
      display: "flex",
      alignItems: "center",
      listStyle: "none",
      margin: 0,
      padding: 0,
      gap: "40px",
    },
    navLink: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      textDecoration: "none",
      color: "#3d4152",
      fontWeight: 500,
      fontSize: "16px",
      transition: "color 0.2s ease-in-out",
    },
  };

  return (
    <header style={styles.headerContainer}>
      <div style={styles.headerContent}>
        <div className="logo-container">
          <a href="/">
            <img
              style={styles.logoImage}
              src="/assets/download.png"
              alt="Foodor Logo"
            />
          </a>
        </div>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={item.link} style={styles.navLink}>
                  {item.icon}
                  <span>{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;