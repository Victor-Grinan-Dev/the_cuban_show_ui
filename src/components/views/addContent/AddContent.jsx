import React, { useState } from 'react';
import { createContent } from '../../../services/firebaseService';
import genStyle from '../../../style/styleGeneral.module.css';
import style from './addContent.module.css';
import { Content} from '../../../classes/content';;

const emptyContent = new Content("", "", "", "");

const AddContent = () => {
    const [content, setContent] = useState(emptyContent);

    const changeHandler = (e) => {
        if(e.target.name === "tags"){ 
            console.log(e.target.name, e.target.value.split(", ")) 
            setContent({...content, [e.target.name]:e.target.value.split(", ")});
        }
        setContent({...content, [e.target.name]:e.target.value});
    }

    const submitHandler = () => {
        console.log(content)
        createContent(content);
    }
    /* handle tags */
  return (
    <div className={genStyle.view}>
        {/* <div>
            post<input type="radio" name="isVideo" id="isVideoTrue" />       
        </div>
        <div>
            link<input type="radio" name="isVideo" id="isVideoTrue" />       
        </div>
        <div>
            link<input type="radio" name="isVideo" id="isVideoTrue" />       
        </div>
        <div>
            video<input type="radio" name="isVideo" id="isVideoTrue" />       
        </div> */}
        
        <input name='title' className={style.input} type="text" placeholder='Title' onChange={(e)=>changeHandler(e)}/>

        <input name='image' className={style.input} type="text" placeholder='Image Url' onChange={(e)=>changeHandler(e)}/>
        <input name='heading' className={style.input} type="text" placeholder='Heading' onChange={(e)=>changeHandler(e)}/>
        <textarea className={style.textarea} name="body" id="body"  placeholder='Body' onChange={(e)=>changeHandler(e)}></textarea>
        
        <p>Tags should be coma separated and lowercase</p>
        <input type="text" className={style.input} name='tags'
        placeholder='Ex. politics, climate change' onChange={(e)=>changeHandler(e)}/>

        <button onClick={submitHandler}>add</button>
    </div>
  )
}

export default AddContent;