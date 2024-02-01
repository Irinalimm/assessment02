import Link from "next/link"
import styles from "./Navigation.module.css"


export default function Navigation() {
    return (
        <nav className={styles.nav-menu}>
            <a className={styles.nav-home} href="/">
            <Image className={styles.personal-icon} src={'/images/personal-logo.png'} alt="Personal Logo" width="90" height="70" priority />
            </a>

            
        </nav>
      
    )
}