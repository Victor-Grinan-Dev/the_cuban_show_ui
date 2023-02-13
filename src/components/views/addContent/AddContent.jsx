import React, { useState } from 'react';
import { collection, addDoc} from 'firebase/firestore';
import { db }from '../../../firebase';

const AddContent = () => {
    const [newTitle, setNewTitle] = useState('');
    const [newBody, setNewBody] = useState('');
    const userCollectionRef = collection(db, "content");

    const createContent = async () => {
        await addDoc(userCollectionRef, {title:newTitle, body: newBody});
    } 

  return (
    <div>
        <p>AddContent</p>
        <input type="text" placeholder='Title' onChange={(e)=>setNewTitle(e.target.value)}/>
        <textarea name="body" id="body" cols="30" rows="10" placeholder='Body' onChange={(e)=>setNewBody(e.target.value)}></textarea>
        <button onClick={createContent}>add</button>
    </div>
  )
}

export default AddContent;