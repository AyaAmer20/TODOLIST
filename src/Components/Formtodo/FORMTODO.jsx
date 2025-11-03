import {React,useState}from 'react'
import shortid from "shortid";
import style from '../Formtodo/formtodo.module.css'
const FORMTODO = ({onSubmit}) => {
   const [text,setText]=useState("");
    const handlesubmit=(e)=>{
        e.preventDefault();
        onSubmit({
          id:shortid.generate(),
          text:text,
          complete:false,        
        })
        setText("")
    }
   
  return (
    <>
    <form onSubmit={handlesubmit}>
        <h1>To do list </h1>
        <input className={style.input_filded} type='text' onChange={(e)=>setText(e.target.value)} value={text}
        placeholder='Enter the Task '/>
        <button className={style.btn} >Add to do</button>
    </form>
    </>
   
  )
}

export default FORMTODO
