const Profile = () => {
  const profileCard = {
    width: "380px",
    margin: "40px auto",
    padding: "25px",
    borderRadius: "12px",
    background: "#ffffff",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    textAlign: "center"
  };

  const avatar = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px",
    border: "4px solid #4a90e2"
  };

  const button = {
    padding: "10px 20px",
    marginTop: "15px",
    background: "#4a90e2",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  };

  return (
    <div style={profileCard}>
      <img
        style={avatar}
        src="https://i.pravatar.cc/150?img=3"
        alt="User Avatar"
      />
      <h2 style={{ margin: "5px 0" }}>DANISH</h2>
      <p style={{ color: "gray" }}>B.TEch CSE Web Developer</p>

      <p style={{ marginTop: "15px" }}>
        Passionate about cloud computing, IoT, and full-stack development.
      </p>

      <button style={button}>Edit Profile</button>
    </div>
  );
};

export default Profile;
