import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import style from './textEditor.module.css';

import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
// import { setContent, setsClearText } from '../../../app/appSlice';
import { setContent, setIsClearText } from '../../../app/appSlice';

const TextEditor = () => {
    const [text, setText] = useState("");
    // const text = useSelector(state => state.app.text);
    const dispatch = useDispatch();
    const content = useSelector(state => state.app.content);
    const isClear = useSelector(state => state.app.isClearText);

    useEffect(() => {
        dispatch(setContent({...content, body: text}))
        // eslint-disable-next-line
    }, [text]);

    useEffect(() => {
        if(isClear){
            setText("");
            dispatch(setIsClearText(false));
        }
        // eslint-disable-next-line
    }, [isClear]);

    const modules = {
        toolbar:[
            [{header:[3, 4, false]}],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
                {list:"ordered"},
                {list:"bullet"},
                {indent:"-1"},
                {indent:"+1"},
            ],
            ["link", "video"]
        ]
    }
  return (
    <div className={style.textEditorContainer}>
        <div className={style.editor}>
           <ReactQuill 
           theme="snow" 
           value={text} 
           onChange={setText}
           modules={modules}
           className={style.editorInput}
           />
        </div>
    </div>
  )
}

export default TextEditor;