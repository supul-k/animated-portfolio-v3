import React from 'react';
import "./navbar.scss";
import Sidebar from '../sidebar/Sidebar';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Supul Kalhara
                </motion.span>
                <div className="social">
                    <a href="#"><img src="./images/facebook.png" alt="facebook" /></a>
                    <a href="#"><img src="./images/instagram.png" alt="instagram" /></a>
                    <a href="#"><img src="./images/linkedin.png" alt="linkedin" /></a>
                    <a href="#"><img src="./images/github.png" alt="github" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
