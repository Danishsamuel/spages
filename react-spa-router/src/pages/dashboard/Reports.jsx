const Reports = () => {
  const box = {
    background: "white",
    padding: "20px",
    margin: "20px auto",
    width: "80%",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#4a90e2" }}>Reports Overview</h1>

      <div style={box}>
        <h3>📌 User Activity</h3>
        <p>Last 30 days user interactions and activity trends.</p>
        <ul>
          <li>Profile visits: 198</li>
          <li>Reports viewed: 132</li>
          <li>Settings updated: 12</li>
        </ul>
      </div>

      <div style={box}>
        <h3>📈 Performance Graph</h3>
        <p>This section will later show charts and visuals.</p>
      </div>

      <div style={box}>
        <h3>📁 Downloadable Reports</h3>
        <button style={{
          padding: "10px 20px",
          background: "#4a90e2",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}>
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Reports;
