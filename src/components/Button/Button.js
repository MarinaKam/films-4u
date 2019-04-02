import React from 'react';
import styles from './Button.module.css';

const Button = ({text, onClick, className}) => (
    <button
        className={styles[className]}
        onClick={onClick}
    >{text}</button>
);


export  default Button;