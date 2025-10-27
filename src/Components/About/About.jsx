import React from 'react';
import styles from './about.module.css'
import exo from '../../assets/images/exwaliser.svg'
import rectangle from '../../assets/images/rectangle.svg'
import gallery1 from '../../assets/images/gallery-1.png'
import gallery2 from '../../assets/images/gallery-2.png'
import gallery3 from '../../assets/images/gallery-3.png'


const About = () => {
    const [info] = React.useState([
        {img: rectangle, title: 'Based in: Los Angeles'},
        {img: rectangle, title: 'Founded in 2011'},
        {img: rectangle, title: 'Genre: #DancePop'},
        {img: rectangle, title: 'Label: 333 Recordings'},
    ])
    return (
        <div className={styles.about} >
            <div className={styles.about__block}>

            <div className='container'>
                <div className={styles.bright_lights}>
                    <div className={styles.about__left}>
                        <div className={styles.about__title}>
                            <img src={exo} alt="exo"/>
                            <h1>Bright Lights</h1>
                        </div>
                        <div className={styles.about__text}>
                            <p>Bright Lights is a multi-Grammy nominated singer, songwriter, DJ and record producer.
                                She has written for numerous
                                <br/> <br/>
                                pop stars including Britney Spears, Justin Bieber, Usher and Beyoncé. Her catalog has
                                amassed over 1 billion streams worldwide. More than 100 million of those streams can be
                                attributed to her artist career and include such hits as Porter Robinson's "Language,"
                                3LAU's "How You Love Me" and her own single "Runaway." She was also a featured vocalist
                                on
                                Zedd's #1 Clarity album. Her latest music video, "Put It Down," reached 1 million
                                streams in
                                the first week, releasing independently. Bright Lights is currently in the studio
                                working on
                                a self-produced album slated for release in 2020. </p>
                        </div>
                        <div className={styles.about__additional}>
                            {info.map((item, i) => (<div key={i} className={styles.about__add__inner}>
                                <img src={item.img} alt={item.title}/>
                                <p>{item.title}</p>
                            </div>))}

                        </div>
                    </div>
                    <div className={styles.about__right}>
                        <img src={gallery1} alt="gallery1"/>
                        <img src={gallery2} alt="gallery2"/>
                    </div>
                </div>

                <div className={styles.bio}>
                    <div className={styles.bio__inner}>
                        <div className={styles.bio__left}>
                            <p>“In an age where mainstream music is designed to be as
                                easily consumed as possible, listening to Bright Lights is
                                refreshing, to say the least. Her sound is perfect for radio
                                but complex enough to separate her from other pop newcomers.”</p>
                            <hr/>
                            <a href="#">PopULove.net</a>
                        </div>
                        <div className={styles.bio__right}>
                            <div>
                            <img src={gallery3} alt="gallery-3"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </div>
    );
};

export default About;