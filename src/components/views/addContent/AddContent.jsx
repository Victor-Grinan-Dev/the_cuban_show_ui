import React, { useState } from 'react';
import { createContent, uploadImage } from '../../../services/firebaseService';
import genStyle from '../../../style/styleGeneral.module.css';
import style from './addContent.module.css';
import { storage } from '../../../firebase';
import { ref } from 'firebase/storage';
import { v4 } from "uuid";
import { useDispatch, useSelector } from 'react-redux';
import { setContent } from '../../../app/appSlice';

import defaultImg from '../../../assets/logo-black.jpg'

//const emptyContent = new Content("", "", "", "");

const AddContent = () => {
    const dispatch = useDispatch();
    // const [content, setContent] = useState(emptyContent);
    const content = useSelector((state) => state.app.content)
    const [imageFile, setImageFile] = useState(null);
    const [imageRef, setImageRef] = useState(null);
    const [error, setError] = useState('');

    const changeHandler = (e) => {
        if(e.target.name === "tags"){ 
            changeContent(e.target.name, e.target.value.split(", "));
        }else if(e.target.name === "image"){
            try {
                setError("Image Uploaded succesfully!!");
                setImageRef(ref(storage, `images/${ imageFile.name + "_id_" + v4()}`));
                changeContent("image", imageRef);
            } catch (error) {
                setError("image couldn't be loaded, try a diff image and then try this image again");
                console.log(error);
            } 
        };
        changeContent(e.target.name, e.target.value);
    };

    // const imgChangeHandler = (e) => {
        
    // }

    const changeContent = (key, value) => {
        dispatch(setContent({...content, [key]:value}));
    };

    const submitHandler = () => {
        uploadImage(imageRef, imageFile);
        createContent(content);
    };
 
    /* handle tags */

  return (
    <div className={genStyle.view}>
        {error && <span>{error}</span>}
        <input name='title' className={style.input} type="text" placeholder='Title' onChange={(e)=>changeHandler(e)}/>

        <input type="file" className={style.fileInput} name="image" accept="image/png, image/jpg, image/*" onChange={(e) => {
                changeHandler(e);
                setImageFile(e.target.files[0]);        
        }}/>

        <img id='preview' className={style.previewImg} src={defaultImg} alt="newsPortrait" />

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