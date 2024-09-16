import React from 'react'
import styles from './Download.module.css'
import { IoLogoAndroid } from "react-icons/io"
import { FaApple } from "react-icons/fa";

const Download = () => {
  return (
    <div className={styles.containers}>
      <div className={styles.textbox}>
        <h1>Get it for Free</h1>
        <p>Choose your native platform and download the app FREE!</p>
      </div>
      <div className={styles.btnContainer}>
        <button className='border-2 border-white px-16 py-4 flex items-center gap-4'><IoLogoAndroid /> Google Play</button>
        <button className='border-2 border-white px-16 py-4 flex items-center gap-4'><FaApple /> IOS App Store</button>
      </div>
    </div>
  )
}

export default Download