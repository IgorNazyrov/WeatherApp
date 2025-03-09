import React from "react";
import styles from './Moon.module.css'

const Moon = ({ className, color, onClick, ...props}) => {

  return (
  <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      onClick={onClick}
      {...props}
      height="24px"
      width="24px"
      style={{cursor: "pointer", color: color}}
      className={`${className} ${styles.moon}`}
    >
      <path d="M24.2,5h-.1a19.2,19.2,0,0,0-17,21.1A19.2,19.2,0,0,0,24.2,42.9h2.1a19.2,19.2,0,0,0,14.4-6.4A.9.9,0,0,0,40,35H38.1c-8.8-.5-16.6-8.4-16.9-17.1A17.4,17.4,0,0,1,25,6.6,1,1,0,0,0,24.2,5Z" />
    </svg>
  )
}

export default Moon
