import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const submitForm = () => {
    localStorage.setItem("loggedIn", true);
    navigate("/dashboard");
  };

  return (
    <div style={styles.card}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <button style={styles.button} onClick={submitForm}>Login</button>
    </div>
  );
};

const styles = {
  card: {
    width: "350px",
    margin: "100px auto",
    padding: "25px",
    boxShadow: "0 0 15px rgba(0,0,0,0.2)",
    borderRadius: "10px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "15px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#0066ff",
    color: "white",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer"
  }
};

export default Login;
