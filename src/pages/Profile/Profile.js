import React, { useEffect, useState } from "react";
import Navbar from "../../widget/Components/Navbar";
import Footer from "../../widget/Components/Footer";
import axios from "axios";

function Profile() {
  const [profile, setProfile] = useState(null);

  //call token
  const token = localStorage.getItem("userToken");

  const fetchUserProfile = () => {
    axios
      .get("http://localhost:8081/api/v1/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setProfile(res.data);
      });
  };

  useEffect(() => {
    fetchUserProfile();
  },[]);

  return (
    <div className="page-container">
      <div className="content-wrap">
        <div>
          {/* <Header /> */}

          <Navbar />

          <div className="main-content">
            <h3>PROFILE</h3>
            <h4>Name: {profile.name}</h4>
            <h4>Email: {profile.email}</h4>
            <h4>Phone: {profile.phone}</h4>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Profile;
