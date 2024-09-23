import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import { FaLeaf } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">MovieEco</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? styles.activeLink : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/movies" 
            className={({ isActive }) => (isActive ? styles.activeLink : '')}>
            Filmes
          </NavLink>
        </li>
        <li>
        <NavLink to="/movies" className={({ isActive }) => (isActive ? styles.activeLink : '')}>
            <FaLeaf className={styles.icon} /> Filmes
        </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
