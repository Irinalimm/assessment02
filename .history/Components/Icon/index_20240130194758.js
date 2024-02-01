import Link from "next/link"
import styles from "./Icon.module.css"
import Image from 'next/image'
import React from "react";
import { useState } from "react";


export default function Icon() {
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

    return (
        <>
        <div className={`${styles['col-lg-3']} ${styles['col-md-3']} ${styles['col-sm-6']}`} key={`${item}`}>
        </>
    )
}