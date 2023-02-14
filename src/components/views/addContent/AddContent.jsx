import React, { useState } from 'react';
import { createContent } from '../../../services/firebaseService';

const AddContent = () => {
    const [newTitle, setNewTitle] = useState('');
    const [newBody, setNewBody] = useState('');

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'
    }}>
        <input type="text" placeholder='Title' onChange={(e)=>setNewTitle(e.target.value)}/>
        <textarea name="body" id="body" cols="30" rows="10" placeholder='Body' onChange={(e)=>setNewBody(e.target.value)}></textarea>
        <button onClick={() => createContent(newTitle, newBody) }>add</button>
    </div>
  )
}

export default AddContent;