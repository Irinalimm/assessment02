import Head from "next/head";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Navigation from "@/Components/Navigation";
import Selector from "@/Components/Selector";
import styles from "@/styles/Home.module.css";
import { useState } from "react";



export default function Home() {
  
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>
    


      <main className={`${styles.main}`}>
      <Selector/>

      <div
          onPointerMove={e => {
            setPosition({
              x: e.clientX,
              y: e.clientY
            })
          }}
          style={{
            position: 'relative',
            width: '100vw',
            height: '50vh'
          }}
          >
          <div
            style={{
              position: 'absolute',
              backgroundColor: 'lightpink',
              borderRadius: '50%',
              transform: `translate(${position.x}px, ${[position.y]}px)`,
              left: 0,
              top: -220,
              width: 20,
              height: 20
            }}
          />
        </div>


      </main>
    
        <Footer/>
    
    </>
  )
}
