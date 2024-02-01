import Link from "next/link"
import styles from "./Navigation.module.css"
import Image from 'next/image'


export default function Navigation() {
    return (
        <div className={styles.outer_container}>
        <nav className={styles.nav_menu}>
            <a className={styles.nav_home} href="/">
            <Image className={styles.personal_logo} src={'/images/personal-icon.png'} alt="Personal Logo" width="90" height="80" priority />
            </a>
            <div className={styles.nav_menu_box}>
                <a className={styles.nav_about} href="/">
                About
                </a>
            </div>
            <div className={styles.nav_menu_box}>
                <a className={styles.navThoughts} href="/">
                Thoughts
                </a>
            </div>
            <a className={styles.navArchive} href="/">
            Archive
            </a>
           


        </nav>
        </div>
      
    )
}