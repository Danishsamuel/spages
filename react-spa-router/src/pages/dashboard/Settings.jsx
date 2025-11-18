const Settings = () => {
  const container = {
    width: "70%",
    margin: "30px auto",
    padding: "25px",
    background: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
  };

  const section = {
    marginBottom: "25px",
    paddingBottom: "15px",
    borderBottom: "1px solid #ddd"
  };

  const saveBtn = {
    padding: "10px 20px",
    background: "#4a90e2",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  };

  return (
    <div style={container}>
      <h2 style={{ color: "#4a90e2" }}>Settings</h2>

      <div style={section}>
        <h3>🔐 Account Security</h3>
        <label>Change Password:</label><br />
        <input type="password" placeholder="Enter new password" style={{ padding: "10px", width: "60%", marginTop: "8px" }} />
      </div>

      <div style={section}>
        <h3>🌙 Appearance</h3>
        <label>
          <input type="checkbox" /> Enable Dark Mode
        </label>
      </div>

      <div style={section}>
        <h3>🔔 Notifications</h3>
        <label><input type="checkbox" /> Email Alerts</label><br />
        <label><input type="checkbox" /> Push Notifications</label><br />
        <label><input type="checkbox" /> SMS Alerts</label>
      </div>

      <button style={saveBtn}>Save Changes</button>
    </div>
  );
};

export default Settings;
