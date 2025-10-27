import React from 'react';
import styles from './hero.module.css'
import player from '../../assets/images/player.png'
import pet1 from '../../assets/images/petProjects-1.png'
import pet2 from '../../assets/images/petProjects-2.png'
import pet3 from '../../assets/images/petProjects-3.png'

const Hero = () => {
    const [petProjects] = React.useState([
        {
        image: pet1,
            title: 'Working on my upcoming full-lenth\n' +
            'album that`s releasing later this year.'
    }, {
        image: pet2,
            title: 'Halloween vibes. ' + 'Listen my new track!'
    }, {
        image: pet3,
            title: 'WarForLove is OUT NOW!! \n' +
            'Stream it here!'
    }])

    return (
        <section className={styles.hero}>
            <div className={styles.hero__bg}>
                <div className='container'>
                    <div className={styles.hero__inner}>
                        <div>
                            <h2>New Single</h2>
                            <h1>War For Love</h1>
                            <img src={player} alt="player"/>
                        </div>
                    </div>
                        <div className={styles.petProject__block}>
                            {petProjects.map((project, i) => (
                                <div key={i} className={styles.petProject}>
                                    <img src={project.image} alt=""/>
                                    <p>{project.title}</p>
                                </div>
                            ))}
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;