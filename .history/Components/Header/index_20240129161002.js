import Link from "next/link"
import styles from "./Header.module.css"


export default function Header() {
    return (
        <header>

            <div className={styles.outerBox}>
                <h1> Header here</h1>
                <Link href='/'>home</Link>
            </div>
           
        </header>
    )
}