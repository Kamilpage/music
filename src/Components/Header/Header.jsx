import React from 'react';
import styles from './header.module.css'
import logo from '../../assets/images/logo-1.png'
import logo2 from '../../assets/images/logo-2.png'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.header__inner}>
                <div className={styles.logos}>
                    <img src={logo} alt="logo-1"/>
                    <img src={logo2} alt="logo-2"/>
                </div>
                <div className={styles.header__nav}>
                    <div className={styles.header__links}>
                        <a href="#">About</a>
                        <a href="#">News</a>
                        <a href="#">Music</a>
                        <a href="#">Media</a>
                        <a href="#">Tours</a>
                        <a href="#">Contacts</a>
                    </div>
                </div>
                </div>
            </div>
        </header>
    );
};

export default Header;