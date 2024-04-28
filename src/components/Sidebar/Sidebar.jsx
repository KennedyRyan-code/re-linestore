import React from 'react'
import { Category } from './Category/Category'
import { Price } from './Price/Price'
import { Mixers } from './Mixers/Mixers'
import { FaCartShopping } from "react-icons/fa6";
import './Sidebar.css' 

export const Sidebar = () => {
  return (
    <div>
      <section className="sidebar">
          <div className="logo-container">
              <h1><FaCartShopping /></h1>
          </div>
        <Category />
        <Price />
        <Mixers />
      </section>
    </div>
  )
}
