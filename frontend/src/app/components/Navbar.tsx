import Link from "next/link"; // Import Link from Next.js
import Image from 'next/image';
import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Image src= {logo} alt="Company Logo" className="logo" />
        <Link href="/" className="nav-link"><h1>ShubEv</h1></Link>
      </div>
      <div className="navbar-middle">
        <input type="text" className="search-bar" placeholder="Search..." />
        <button className="search-button">Search your dream car</button>
      </div>
      <div className="navbar-right">
        <Link href="#contact" className="nav-link">Contact</Link>
        <Link href="/team" className="nav-link">Team</Link> 
        <Link href="/login" className="nav-link">Login</Link> 
        <Link href= "/logout" className="nav-Link">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;



