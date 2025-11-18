import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={styles.wrapper}>
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>MyPanel</h2>

        <nav>
          <Link to="profile" style={styles.link}>Profile</Link>
          <Link to="reports" style={styles.link}>Reports</Link>
          <Link to="settings" style={styles.link}>Settings</Link>
        </nav>
      </aside>

      <main style={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    height: "100vh",
  },
  sidebar: {
    width: "250px",
    background: "#1a1f36",
    color: "white",
    padding: "20px",
  },
  logo: {
    marginBottom: "30px",
  },
  link: {
    display: "block",
    padding: "10px 0",
    color: "white",
    textDecoration: "none",
  },
  content: {
    flex: 1,
    padding: "30px",
    background: "#f4f4f9",
  },
};

export default Dashboard;
