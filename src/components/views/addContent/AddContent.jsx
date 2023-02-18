import React, { useEffect, useState } from 'react';
import { createContent, uploadImage } from '../../../services/firebaseService';
import genStyle from '../../../style/styleGeneral.module.css';
import style from './addContent.module.css';
import { Content} from '../../../classes/content';

import { storage } from '../../../firebase';
import { ref } from 'firebase/storage';
import { v4 } from "uuid";

const emptyContent = new Content("", "", "", "");

const AddContent = () => {
    const [content, setContent] = useState(emptyContent);
    const [imageFile, setImageFile] = useState(null);
    const [imageRef, setImageRef] = useState(null);
    
    useEffect(() => {
        if(imageFile){
            console.log("imageFile", imageFile.name);
        }
        if(imageRef){
            console.log('imageRef',imageRef);
        }
        if(content){
            console.log("content", content);
        }
    }, [imageFile, imageRef]);

    const changeHandler = (e) => {
        if(e.target.name === "tags"){ 
            changeContent(e.target.name, e.target.value.split(", "));
        }else if(e.target.name === "image"){
            setImageRef(ref(storage, `images/${ imageFile.name + "_id_" + v4()}`));
            changeContent("image", imageRef);
        };
        changeContent(e.target.name, e.target.value);
     
    };

    const changeContent = (key, value) => {
        setContent({...content, [key]:value});
    };

    const submitHandler = () => {
        uploadImage(imageRef, imageFile);
        createContent(content);
    };

    
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

        <input type="file" className={style.fileInput} name="image" onChange={(e) => {
                setImageFile(e.target.files[0]);
                changeHandler(e);
            }}/>

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