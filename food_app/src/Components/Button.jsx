import React from 'react';
import styles from '../Styles/Button.module.css';

const Button = ({ label, onClick, type, color }) => {
  return (
    <button className={`${styles.button} ${styles[color]}`} onClick={onClick} type={type}>
      {label}
    </button>
  );
}

export default Button;
