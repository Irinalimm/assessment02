import Link from "next/link"
import styles from "./Selector.module.css"
import { useState } from "react";
import React from "react";
import Icon from "../Icon";




export default function Selector() {
  
    const classFilters = {
        1: 'Magician',
        2: 'Theif',
        4: 'Warrior',
        8: 'Bowman',
        16: 'Pirate',
        32: 'Nothing'
      }
  
      const [input, setInput] = useState(0); //2 is stored here
  
      const getClassStyle = flagValue => (parseInt(input) & flagValue) > 0? {color: 'yellow' } : null;
      const classFiltersArray = Object.entries(classFilters);
    
      return (<>

<div className={styles.row}>
            <div className={`${styles['col-lg-6']} ${styles['col-md-6']} ${styles['col-sm-6']}`}>
                How much money do you have in your pocket?
                <div className={styles.textInput}>
                <input 
                    id="input"
                    type="text"
                    placeholder="bitmask decimal value"
                    value={input}
                    onChange={event => setInput(parseInt(event.target.value))}
                />
                </div>
            </div>

            <div className={`${styles['col-lg-6']} ${styles['col-md-6']} ${styles['col-sm-6']}`}>
                <div className={styles.gridContainer}>
                    {classFiltersArray.map(([key, value]) => (
                        <div key={key} style={getClassStyle(parseInt(key))} className={styles.gridItem}>
                            {value}
                        </div>
                    ))}
                </div>
            </div>
        </div>
       </>  
      )
}
