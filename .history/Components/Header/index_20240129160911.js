import Link from "next/link"


export default function Header() {
    return (
        <header>

            <div className={styles.outer-box}>
                <h1> Header here</h1>
                <Link href='/'>home</Link>
            </div>
           
        </header>
    )
}