import Head from "next/head";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Navigation from "@/Components/Navigation";
import styles from "@/styles/Home.module.css";
import { useState } from "react";



export default function Home() {

    // 0 0 1 1
    // 8 4 2 1
    const classFilters = {
      //key: value
      1: 'Magician',
      2: 'Theif',
      4: 'Warrior',
      8: 'Bowman',
      16: 'Pirate',
      32: 'Nothing'
    }

    const [input, setInput] = useState(); //2 is stored here

    const getClassStyle = flagValue => (input & flagValue) > 0? {backgroundColor: 'yellow' } : null;
    //flagValue = 1, 2 , 4 , 8, 16, 32

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
        <input
        id="input"
        type= "text"
        placeholder= "bitmask decimal value"
        value={input}
        onChange={event => setInput(event.target.value)}
        />
        <table>
          <tbody>
            { //item = 1 2 4 8 16 32
              //Object.key = static method returns an array of a given object's own
              //enumerable string-key property names.
              //enumeral = somthing that can be counted
              
              Object.keys(classFilters).map(item => (
                <tr key={item} style={getClassStyle(item)}>
                  <td>{item}</td> 
                  <td>{classFilters[item]}</td> 
                </tr>
              ))
            }
          </tbody>
        </table>


      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}
