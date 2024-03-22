import React, { useEffect, useState } from "react";
import Navbar from "../../widget/Components/Navbar";
import Footer from "../../widget/Components/Footer";
import axios from "axios";
import { useAuth } from "../../context.js/AuthContext";

function AllProducts(){
    return(
        <div className="page-container">
        <div className="content-wrap">
            <div>
                <Navbar/>
                <div>
                    <h3>All Products</h3>
                </div>


                <Footer/>
            </div>
        </div>
    </div>
    )
}

export default AllProducts