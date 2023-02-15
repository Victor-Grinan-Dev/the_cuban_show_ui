import React, { useState } from 'react';
import { createContent } from '../../../services/firebaseService';
import genStyle from '../../../style/styleGeneral.module.css';
import style from './addContent.module.css';

const AddContent = () => {
    const [newTitle, setNewTitle] = useState('');
    const [newImage, setNewImage] = useState('');
    const [newHeading, setNewHeading] = useState('');
    const [newBody, setNewBody] = useState('');

    const submitHandler = () => {
        console.log(newTitle, newImage, newHeading, newBody);
        createContent(newTitle, newImage, newHeading, newBody);
    }
  return (
    <div className={genStyle.view}>
        <input className={style.input} type="text" placeholder='Title' onChange={(e)=>setNewTitle(e.target.value)}/>
        <input className={style.input} type="text" placeholder='Image Url' onChange={(e)=>setNewImage(e.target.value)}/>
        <input className={style.input} type="text" placeholder='Heading' onChange={(e)=>setNewHeading(e.target.value)}/>
        <textarea className={style.textarea} name="body" id="body"  placeholder='Body' onChange={(e)=>setNewBody(e.target.value)}></textarea>
        <button onClick={submitHandler}>add</button>
    </div>
  )
}

export default AddContent;