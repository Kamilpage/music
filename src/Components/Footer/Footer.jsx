import React from 'react';
import styles from './footer.module.css'
import logo from '../../assets/images/logo-1.png'
import iTunes from '../../assets/images/apple.svg'
import spotify from '../../assets/images/spotify_logo.svg'
import instagram from '../../assets/images/instagram.svg'
import youtube from '../../assets/images/youtube.svg'
import x from '../../assets/images/x.svg'
import facebook from '../../assets/images/meta.svg'
const Footer = () => {
    return (
        <footer className={styles.footer}>

            {/* LOGO */}
            <div className={styles.logoBlock}>
                <img src={logo} alt="logo" className={styles.logo} />
                <span className={styles.logoText}>Bright Lights</span>
            </div>

            {/* MANAGEMENT INFO */}
            <div className={styles.info}>
                <p>ARTIST MANAGEMENT: <span>JAKE HENNY</span></p>
                <p>EMAIL: <span>JAKE@BRIGHTLIGHTSOFFICIAL.COM</span></p>
            </div>

            {/* SOCIAL ICONS */}
            <div className={styles.socials}>
                <img src={iTunes} alt="iTunes" />
                <img src={spotify} alt="spotify" />
                <img src={instagram} alt="insta" />

                <img src={youtube} alt="yt" />
                <img src={x} alt="twitter" />
                <img src={facebook} alt="fb" />
            </div>

            {/* COPYRIGHT */}
            <p className={styles.copy}>© 2020 BRIGHT LIGHTS.</p>

        </footer>
    );
};

export default Footer;