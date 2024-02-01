import Link from "next/link"
import styles from "./Grid.module.css"
import { useState } from "react";
import React from "react";



export default function Grid() {
  
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
        <div className={layout['row']}>
          <div className={`${layout['col-lg-3']} ${layout['col-md-3']} ${layout['col-sm-6']}`}>
            How much do you have in your pocket?
            <input
            id="input"
            type= "text"
            placeholder= "bitmask decimal value"
            value={input}
            onChange={event => setInput(event.target.value)}
            />
          </div>

        {
              Object.keys(classFilters).map((item) => (
                <Icon key={item} imagePath={`${classFilters[item]}.svg`} alt={classFilters[item]} style={getClassStyle(item)}>
                  ))  
        }

        </div>    
        </>
    )
};

