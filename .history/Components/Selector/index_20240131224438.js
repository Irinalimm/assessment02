import Link from "next/link"
import styles from "./Selector.module.css"
import { useState } from "react";
import React from "react";
import Icon from "../Image";
import Image from "next/image";




export default function Selector() {
  
    const classFilters = {
        1: 'game1.png',
        2: 'game2.png',
        4: 'game3.png',
        8: 'game4.jpeg',
        16: 'game4.jpeg',
        32: 'game4.jpeg'
      }
  
      const [input, setInput] = useState(); //2 is stored here
  
      const getClassStyle = flagValue => (parseInt(input) & flagValue) > 0? {background: 'red' } : null;
      const classFiltersArray = Object.entries(classFilters);
    
      return (<>

<div className={styles.row}>
            <div className={styles.selector_info}>
                How much money do you have in your pocket?
                <div className={styles.textInput}>
                <input 
                    id="input"
                    type="text"
                    placeholder="0 < Your Money < 256"
                    value={input}
                    onChange={event => setInput(parseInt(event.target.value))}
                    className={styles.inputField}
                />
                </div>
            </div>

            <div className={styles.selector_content}>
                <div className={styles.gridContainer}>
                    {classFiltersArray.map(([key, value]) => (
                        <div key={key} style={getClassStyle(parseInt(key))} className={styles.gridItem}>
                            <img src={`/images/${value}`} alt={value} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
       </>  
      )
}
