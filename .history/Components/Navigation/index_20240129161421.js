import Link from "next/link"
import styles from "./Navigation.module.css"


export default function Navigation() {
    return (
      

            <div className={styles.outerBox}>
                <h1> Header here</h1>
                <Link href='/'>home</Link>
            </div>
   
    )
}