import React from 'react';
import styles from './footer.module.css'
import logo from '../../assets/images/logo-1.png'
import brand from '../../assets/images/logo-2.png'
import apple from '../../assets/images/apple.svg'
import spotify from '../../assets/images/spotify_logo.svg'
import instagram from '../../assets/images/instagram.svg'
import youtube from '../../assets/images/youtube.svg'
import x from '../../assets/images/x.svg'
import facebook from '../../assets/images/meta.svg'


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className='container'>
                <div className={styles.footer__inner}>
                    <div className={styles.footer__logo}>
                        <img src={logo} alt="logo"/>
                        <img src={brand} alt="brand"/>
                    </div>
                    <div className={styles.footer__details}>
                        <h2>Artist Management: Jake Henny</h2>
                        <h2>EMAIL: jake@brightlightsofficial.com</h2>
                    </div>
                    <div className={styles.footer__socials}>
                        <img src={apple} alt="apple"/>
                        <img src={spotify} alt="spotify"/>
                        <img src={instagram} alt="instagram"/>
                        <img src={youtube} alt="youtube"/>
                        <img src={x} alt="x"/>
                        <img src={facebook} alt="facebook"/>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;