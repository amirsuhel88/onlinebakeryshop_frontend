import React from "react";
// import Header from "../../widget/Components/Header.js";
import Footer from "../../widget/Components/Footer";
import Content from "../Content/Content.js";
import Navbar from "../../widget/Components/Navbar.js";
import "../../App.css";
function Home() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <div>
          {/* <Header /> */}

          <Navbar/>
          <Content />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
