import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import style from './textEditor.module.css';

import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {
    const [text, setText] = useState("");

    const modules = {
        toolbar:[
            [{header:[3, 4, false]}],
            [{font:[]}],
            [{size:[]}],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
                {list:"ordered"},
                {list:"bullet"},
                {indent:"-1"},
                {indent:"+1"},
            ]
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

           />
        </div>
        <div className={style.preview} 
            dangerouslySetInnerHTML={{__html: text}}
        >
        </div>
    </div>
  )
}

export default TextEditor;