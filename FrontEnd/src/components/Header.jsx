import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf } from 'react-icons/fa';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        MovieEco
      </div>
      <nav className={styles.navLinks}>
        <Link to="/" className={styles.navLink}><FaLeaf className={styles.icon}/> Home</Link>
        <Link to="/movies" className={styles.navLink}><FaLeaf className={styles.icon}/> Filmes</Link>
        <Link to="/about" className={styles.navLink}><FaLeaf className={styles.icon}/> Sobre</Link>
      </nav>
    </header>
  );
};

export default Header;
