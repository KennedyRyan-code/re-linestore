import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { MdAccountCircle } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { FaHeartCircleCheck } from "react-icons/fa6";
import "./navbar.css";


export const Navbar = () => {
    return (
    <>
        <div className="navbar">
            <div className="home-link">
                <Link className="home-link" to="/"> <CiShop size={42}/>Liqueur Store </Link>
            </div>
            <div  className="search"><input type="text" className="search input" placeholder="Search"/> </div>
             
            <div className="links">
                
                <Link to="/cart">
                    <ShoppingCart size={32} />
                </Link>
                <Link to="/wishlist"> <FaHeartCircleCheck /> </Link>
                <Link to="/user"> <MdAccountCircle /> </Link>

            </div>
        </div>
    </>
    )
}