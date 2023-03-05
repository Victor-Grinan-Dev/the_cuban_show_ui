import React, { useEffect } from 'react';
import { createContent } from '../../../services/firebaseService';
import genStyle from '../../../style/styleGeneral.module.css';
import style from './addContent.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setContent, setError, setImageUrl, setMessage } from '../../../app/appSlice';
import { Content } from '../../../classes/content';
//import defaultImg from '../../../assets/logo-black.jpg'

const AddContent = () => {
    const dispatch = useDispatch();

    //const imageUrl = useSelector(state => state.app.imageUrl);
    const content = useSelector((state) => state.app.content);
    const error = useSelector(state => state.app.error);
    const message = useSelector(state => state.app.message);
    //const taggs = useSelector(state => state.app.taggs);

    useEffect(() => {
        if(error || message){
            const setTimer = setInterval(() => {
                cleanMessagge();
              }, 10000);
            return () => setTimer;
        }
    // eslint-disable-next-line
    }, [error, message]);

    const cleanMessagge = () => {
        dispatch(setError(''));
        dispatch(setMessage(''));
    };

    const resetContent = () => {
        dispatch(setContent(new Content("", "" , "", "")));
    }

    const changeHandler = (e) => {
        if(e.target.name === "tags"){ 
            changeContent(e.target.name, e.target.value.split(", "));
        }
        if(e.target.name === "imageUrl"){
            dispatch(setImageUrl(e.target.value))
        }
        changeContent(e.target.name, e.target.value);
    };

    const changeContent = (key, value) => {
        dispatch(setContent({...content, [key]:value}));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if(content.title !== '' && content.body !== '' && content.heading !== ''){
            createContent(content);
            document.getElementById("form").reset();
            dispatch(setMessage('Article added!'));
            resetContent();
        }else{
            dispatch(setError('Input fields still empty'));
        }
    };
 
  return (
    <div className={genStyle.view}  >
        <div 
        className={error ? genStyle.show : genStyle.hidden}
        style={{color : "red"}}>
            {error}
        </div>
        <div 
        className={message ? genStyle.show : genStyle.hidden}  
        style={{color : "green"}}>
            {message}
        </div>

        <form onSubmit={(e) => submitHandler(e)} className={style.form} id='form' >
            <input name='title' className={style.input} type="text" placeholder='Title*' onChange={(e)=>changeHandler(e)}/>

            <input type="text" name='image' placeholder='Image Url...' className={style.input} onChange={changeHandler}/>

            {/* <img id='preview' className={style.previewImg} src={imageUrl ? imageUrl : defaultImg} alt={"news portrait"} /> */}

            <input name='heading' className={style.input} type="text" placeholder='Heading*' onChange={(e)=>changeHandler(e)}/>
            <textarea className={style.textarea} name="body" id="body"  placeholder='Body*' onChange={(e)=>changeHandler(e)}></textarea>

            {/* <p>Tags should be coma separated and lowercase</p>
            { taggs && <input type="text" className={style.input} name='tags'
            placeholder='Ex. politics, climate change' onChange={(e)=>changeHandler(e)}/>} */}

            <button>Add</button>
        </form>
    </div>
  )
}

export default AddContent;