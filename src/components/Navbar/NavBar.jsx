import React from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={styles.container}>

            <div className=''>
                <img src="logo.png" alt="" />
            </div>

                <ul className={styles.list}>
                    <li>FEATURES</li>
                    <li>SCREENSHOT</li>
                    <li>ABOUT</li>
                    <li>TEAM</li>
                    <li>PRICING</li>
                    <li>CONTACT</li>
                </ul>

        </div>
    )
}

export default NavBar
