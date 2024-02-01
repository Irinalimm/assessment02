import Link from "next/link"
import styles from "./Navigation.module.css"
import Image from 'next/image'


export default function Navigation() {
    return (
  
        <nav className={styles.navMenu}>
        <div className={styles.innerContainer}>
           
                <a className={styles.navHome} href="/">
                <Image className={styles.personalLogo} src={'/images/personal-icon.png'} alt="Personal Logo" width="120" height="120" priority />
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
 
      
    )
}