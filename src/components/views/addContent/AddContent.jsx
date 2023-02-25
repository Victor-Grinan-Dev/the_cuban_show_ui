import React, { useEffect, useState } from 'react';
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
    const [imageUrl, setImageUrl] = useState(null);
    const [imageRef, setImageRef] = useState(null);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        imageFile && console.log("imageFile", imageFile);
        imageFile && console.log("imageFile", imageFile.name);
    }, [imageFile]);

    const changeHandler = (e) => {
        if(e.target.name === "tags"){ 
            changeContent(e.target.name, e.target.value.split(", "));
        }else if(e.target.name === "image"){
            try {
                setError('');
                setMessage("Image Uploaded succesfully!!");
                setImageRef(ref(storage, `images/${ imageFile.name + "_id_" + v4()}`));
                changeContent("image", imageRef);
            } catch (error) {
                setMessage('');
                setError("ERROR loading, try a diff image and then try this image again");
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
        {error && <span style={{color : "red"}}>{error}</span>}
        {message && <span style={{color : "green"}}>{message}</span> }
        <input name='title' className={style.input} type="text" placeholder='Title' onChange={(e)=>changeHandler(e)}/>

        <input type="file" className={style.fileInput} name="image" accept="image/*" onChange={(e) => {
                changeHandler(e);
                setImageUrl(URL.createObjectURL(e.target.files[0]));
                setImageFile(e.target.files[0]);        
        }}/>

        <img id='preview' className={style.previewImg} src={imageUrl && !error ?  imageUrl : defaultImg} alt={imageFile ? imageFile.name : "news portrait"} />

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