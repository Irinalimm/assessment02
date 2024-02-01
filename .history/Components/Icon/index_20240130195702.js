import Link from "next/link"
import styles from "./Icon.module.css"
import Image from 'next/image'
import React from "react";


export default function Icon({ imagePath, alt, isSelected }) {
    return (
      <div className={isSelected ? 'selected-image' : 'image'}>
        <img src={imagePath} alt={alt} />
      </div>
    );
  }