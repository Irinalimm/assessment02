import Link from "next/link"
import styles from "./Navigation.module.css"
import Image from 'next/image'


export default function Navigation() {
    return (
        <div className={styles.outerContainer}>
        <nav className={styles.navMenu}>
            <a className={styles.navHomeButton} href="/">
            <Image className={styles.personalLogo} src={'/images/personal-icon.png'} alt="Personal Logo" width="90" height="80" priority />
            </a>
            <a className={styles.navAbout} href="/">
            About
            </a>
            <a className={styles.navThoughts} href="/">
            Thoughts
            </a>
            <a className={styles.navArchive} href="/">
            Archive
            </a>
           


        </nav>
        </div>
      
    )
}