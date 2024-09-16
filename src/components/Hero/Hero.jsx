import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.container}>

            <div className={styles.left}>
                <h1>Showcase your App<br />with <span>PsdFreebies.com</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing<br />elit. Praesentium consequatur reiciendis quisquam.</p>
                <button className='border-2 border-white px-2 py-1'>
                    Download
                </button>
            </div>

            <div className={styles.right}>
                
            </div>

        </div>
    )
}

export default Hero
