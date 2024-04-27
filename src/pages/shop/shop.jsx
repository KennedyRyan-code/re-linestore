import React from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Products } from "../../components/Products/Products";
import { Recommended } from "../../components/Recommended/Recommended";
import "./shop.css";

export const Shop = () => {
    return (
    <>
        <div className="shop">
            <div className="storeimg-container">
                <img className="storeimg" src="https://th.bing.com/th/id/R.e11c89b1f73476246b4467f4966e4612?rik=cJ6OOsiuAXCaaQ&pid=ImgRaw&r=0" alt="Uniwear Store" />
            </div>
            <div className="side-bar">
                <Sidebar />
            </div>
            <div className="shopTitle">
                <h1>Shroomy Culture</h1>
            </div>          
            <div className="Recommended">
                <Recommended />
            </div>
            <div className="products">
                <Products />
            </div>
        </div>
    </>
    )
}