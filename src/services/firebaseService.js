
import { db } from '../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const contentCollectionRef = collection(db, "content");

export const createContent = async (newTitle, newBody) => {
    await addDoc(contentCollectionRef, {title:newTitle, body: newBody});
} 

export const getContents = async () => {
    const data = await getDocs(contentCollectionRef);
    return data.docs.map((doc) => ({...doc.data(), id: doc.id}));
  }

