import React from "react";
import logo from "../assets/jyotirmoySharmaLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";


const Navbar = () => {
  return (

    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img 
            className="mx-2 w-10" src={logo} alt="logo" />
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors duration-300">
        <FaLinkedin />
      </a>
      <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-colors duration-300">
        <FaGithub />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
        <FaSquareXTwitter />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors duration-300">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors duration-300">
        <FaFacebook />
      </a>
    
        </div>
    </nav>
  )
}

export default Navbar