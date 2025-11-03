import React from 'react';
import style from '../TODO/TODO.module.css';

const TODO = ({ todo, onDelete }) => {
  return (
    <div className={style.D_f}>
      {todo.text}
      <button 
        className={style.delet_btn} 
        onClick={() => onDelete(todo.id)}
      >
        X
      </button>
    </div>
  );
};

export default TODO;
