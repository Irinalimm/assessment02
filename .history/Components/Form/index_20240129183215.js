import Link from "next/link"
import styles from "./Form.module.css"
import { useState } from "react";

export default function Form() {
  
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
        <div className={styles.itemTable}>
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
        </div>
        </>
    )
}