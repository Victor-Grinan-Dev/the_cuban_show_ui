
import { db } from '../firebase';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc, serverTimestamp } from 'firebase/firestore';

const contentCollectionRef = collection(db, "content");

export const createContent = async (content) => {
    try {
        await addDoc(contentCollectionRef, {...content, "date":serverTimestamp()});
    } catch (error) {
        console.log(error);
    }
} 

export const getContents = async () => {
    const data = await getDocs(contentCollectionRef);
    return data.docs.map((doc) => ({...doc.data(), id: doc.id}));
}

export const updateContent = async (id, content) => {
    const contentDoc = doc(db, "content", id);
    await updateDoc(contentDoc, content);
}

export const deleteContent = async (id) => {
    const contentDoc = doc(db, "content", id);
    await deleteDoc(contentDoc);
}
