import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { RiContactsLine } from "react-icons/ri";
import { CiShop } from "react-icons/ci";
import { FaBookReader } from "react-icons/fa";
import "./navbar.css";


export const Navbar = () => {
    return (
    <>
        <div className="navbar">
            <div className="home-link">
                <Link className="home-link" to="/"> <CiShop size={42}/>Shroomy Culture </Link>
            </div>
            <div  className="search"><input type="text" className="search input" placeholder="Search"/> </div>
             
            <div className="links">
                
                <Link to="/cart">
                    <ShoppingCart size={32} />
                </Link>
                <Link to="/blog"> <FaBookReader /> </Link>
                <Link to="/contact"> <RiContactsLine /> </Link>

            </div>
        </div>
    </>
    )
}