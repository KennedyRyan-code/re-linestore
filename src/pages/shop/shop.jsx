import React from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Products } from "../../components/Products/Products";
import { Recommended } from "../../components/Recommended/Recommended";
import './shop.css'

export const Shop = () => {
    return (
    <>
        <Sidebar />
        <Recommended />
        <Products />
     
    </>
    )
}