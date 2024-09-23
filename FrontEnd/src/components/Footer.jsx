// components/Footer.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaX } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>© 2024 MovieEco. Todos os direitos reservados.</p>
      <div className={styles.footerIcons}>
        <FaFacebook className={styles.footerIcon} />
        <FaInstagram className={styles.footerIcon} />
        <FaX className={styles.footerIcon} />
      </div>
    </footer>
  );
};

export default Footer;
