import Link from "next/link"
import styles from "./Navigation.module.css"
import Image from 'next/image'


export default function Navigation() {
    return (
        <div className={styles.outerContainer}>
        <nav className={styles.navMenu}>
            <a className={styles.navHome} href="/">
            <Image className={styles.personalLogo} src={'/images/personal-icon.png'} alt="Personal Logo" width="90" height="80" priority />
            </a>
            <div className={styles.innerContainer}>
            <div className={styles.navMenuBox}>
                <a className={styles.navAbout} href="/">
                About
                </a>
            </div>
            <div className={styles.navMenuBox}>
                <a className={styles.navThoughts} href="/">
                Thoughts
                </a>
            </div>
            <div className={styles.navMenuBox}>
                <a className={styles.navArchive} href="/">
                Archive
                </a>
            </div>
            </div>
           


        </nav>
        </div>
      
    )
}