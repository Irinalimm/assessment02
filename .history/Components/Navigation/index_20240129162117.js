import Link from "next/link"
import styles from "./Navigation.module.css"
import Image from 'next/images'


export default function Navigation() {
    return (
        <nav className={styles.navMenu}>
            <a className={styles.navHome} href="/">
            <Image className={styles.personalIcon} src={'/images/personal-logo.png'} alt="Personal Logo" width="90" height="70" priority />
            </a>

            
        </nav>
      
    )
}