import Link from "next/link"
import styles from './Image.module.css'
import Image from 'next/image'
import React, {useState} from "react";


export default function Image({ imagePath, alt, isSelected }) {



    return (
      <div className={isSelected ? 'selected-image' : 'image'}>
        <img src={imagePath} alt={alt} />
      </div>
    );
  }