
import { db, storage } from '../firebase';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';

import { ref } from 'firebase/storage';
import { v4 } from "uuid";

const contentCollectionRef = collection(db, "content");

export const createContent = async (content) => {
    await addDoc(contentCollectionRef, content);
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

export const uploadImage = (image) => {
    if(!image) return;
    const imageRef = ref(storage, `${image.name + v4()}`)
}