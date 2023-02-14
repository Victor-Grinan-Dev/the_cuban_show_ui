import React, { useState } from 'react';
import { createContent } from '../../../services/firebaseService';
import genStyle from '../../../style/styleGeneral.module.css';
import style from './addContent.module.css';

const AddContent = () => {
    const [newTitle, setNewTitle] = useState('');
    const [newBody, setNewBody] = useState('');

  return (
    <div className={genStyle.view}>
        <input className={style.input} type="text" placeholder='Title' onChange={(e)=>setNewTitle(e.target.value)}/>
        <input className={style.input} type="text" placeholder='Image Url' onChange={(e)=>setNewTitle(e.target.value)}/>
        <input className={style.input} type="text" placeholder='Heading' onChange={(e)=>setNewTitle(e.target.value)}/>
        <textarea className={style.textarea} name="body" id="body"  placeholder='Body' onChange={(e)=>setNewBody(e.target.value)}></textarea>
        <button onClick={() => createContent(newTitle, newBody) }>add</button>
    </div>
  )
}

export default AddContent;