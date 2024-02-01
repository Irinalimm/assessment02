import Link from "next/link"
import styles from "./Navigation.module.css"
import Image from 'next/image'


export default function Navigation() {
    return (
        <div className={styles.outerContainer}>
        <nav className={styles.navMenu}>
        <div className={styles.innerContainer}>
           
                <a className={styles.navHome} href="/">
                <image className={styles.personalLogo} src={'/images/personal-icon.png'} alt="Personal Logo" width="90" height="80" priority />
                </a>
        
            <div className={styles.navMenuBoxAbout}>
                <a className={styles.navText} href="/">
                About
                </a>
            </div>
            <div className={styles.navMenuBoxThoughts}>
                <a className={styles.navText} href="/">
                Thoughts
                </a>
            </div>
            <div className={styles.navMenuBoxArchive}>
                <a className={styles.navText} href="/">
                Archive
                </a>
            </div>
            </div>
        </nav>
        </div>
      
    )
}