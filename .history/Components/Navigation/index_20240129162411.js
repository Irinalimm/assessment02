import Link from "next/link"
import styles from "./Navigation.module.css"
import Image from 'next/image'


export default function Navigation() {
    return (
        <nav className={styles.navMenu}>
            <a className={styles.navHomeButton} href="/">
            <Image className={styles.personalLogo} src={'/images/personal-icon.png'} alt="Personal Logo" width="90" height="80" priority />
            </a>
            <a className={styles.navHome} href="/">
            Home
            </a>

        </nav>
      
    )
}