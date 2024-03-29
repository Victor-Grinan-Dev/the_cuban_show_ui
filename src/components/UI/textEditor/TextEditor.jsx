import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import style from './textEditor.module.css';

import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import { setContent } from '../../../app/appSlice';

const TextEditor = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const content = useSelector(state => state.app.content);
    const darkMode = useSelector(state => state.app.darkMode);

    useEffect(() => {
        dispatch(setContent({...content, body: text}))
        // eslint-disable-next-line
    }, [text]);


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
    <div className={darkMode ? style.textEditorContainer : style.darkTextEditorContainer}>
        <div className={style.editor}>
           <ReactQuill 
           theme="snow"
           value={text} 
           onChange={setText}
           modules={modules}
           className={ style.editorInput }
           />
        </div>
    </div>
  )
}

export default TextEditor;