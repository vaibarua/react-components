import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, Link } from "react-router-dom";
import Navbar from './navbar.js';

export default function Home() {
    return(
       <>
    
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>

          <li>
            <Link to="/">Navbar</Link>
          </li>
         
        </ul>
      </nav>

      <Outlet />
   {/* <Navbar/> */}
    </>


       </>
    );
}