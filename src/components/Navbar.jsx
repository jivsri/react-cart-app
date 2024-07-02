import React from 'react';
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";


export default function Navbar(props) {
  return (
    <>

      <div className="p-3 h-25 w-50">
        <ul className="flex justify-around h-25 text-xl">
          <li>
            <NavLink to="/"
              className={({ isActive }) => {
                return (isActive ? "text-orange-700" : "text-blue-800");
              }}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about"
              className={({ isActive }) => {
                return (isActive ? "text-orange-700" : "text-blue-800");
              }}>About</NavLink>
          </li>
          <li>
            <NavLink to="/cart"
              className={({ isActive }) => {
                return (isActive ? "text-orange-700" : "text-blue-800");
              }}>Cart</NavLink>
          </li>
          <li className="absolute right-7">
            <NavLink to="/cart">
              <FaCartPlus size={30} />
            </NavLink>

          </li>
          <li className="absolute right-2 ">{props.cnt}</li>
        </ul>
      </div>


    </>
  )
}
