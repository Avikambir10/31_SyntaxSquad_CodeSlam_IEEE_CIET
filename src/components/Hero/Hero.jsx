import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.container}>

            <div className={styles.left}>
                <h1>Showcase your App<br></br>with <span>PsdFreebies.com</span></h1>
                <p>Proin scelerisque fringilla magna bibendum dui tempor<br></br>velnteger accumsan fermentum leousce viverraelnteger.</p>
                <button className='border-2 border-white px-14 py-2'>
                    Download
                </button>
            </div>

            <div className={styles.right}>
                <img src='Phone1.png'></img>
            </div>

        </div>
    )
}

export default Hero
