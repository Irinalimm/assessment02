import Link from "next/link"
import styles from "./Grid.module.css"
import { useState } from "react";
import React from "react";
import Icon from "../Icon";




export default function Grid() {
  
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
    
      return (<>

        <div className={styles['row']}>
          <div className={`${styles['col-lg-12']} ${styles['col-md-12']} ${styles['col-sm-12']}`}>
            How much money do you have in your pocket?
            <input
            id="input"
            type= "text"
            placeholder= "bitmask decimal value"
            value={input}
            onChange={event => setInput(parseInt(event.target.value))}
            />
          </div>

        {Object.keys(classFilters).map((item) => (
                <Icon key={item} imagePath={`${classFilters[item]}.svg`} alt={classFilters[item]} isSelected={getClassStyle(item)}/>
              ))}
        </div>    
       </>  
      )
}
