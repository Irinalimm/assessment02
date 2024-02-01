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
  
      const [input, setInput] = useState(); //2 is stored here
  
      const getClassStyle = flagValue => (input & flagValue) > 0? {color: 'yellow' } : null;
      //flagValue = 1, 2 , 4 , 8, 16, 32
    
      return (
        <>

        <div className={layout['row']}>
          <div className={`${layout['col-lg-12']} ${layout['col-md-12']} ${layout['col-sm-12']}`}>
            How much money do you have in your pocket?
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
                <Icon key={item} imagePath={`${classFilters[item]}.svg`} alt={classFilters[item]} isSelected={getClassStyle(item)}>
              ))
        }
        </div>    
       </>  
      )
};
