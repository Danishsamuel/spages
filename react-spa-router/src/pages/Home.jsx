import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to Smart Dashboard</h1>
      <p>Your personal control center with smart navigation.</p>
      <Link to="/login" style={styles.btn}>Go to Login</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    paddingTop: "80px",
  },
  btn: {
    padding: "12px 20px",
    background: "#0066ff",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    marginTop: "20px",
    display: "inline-block"
  }
};

export default Home;
