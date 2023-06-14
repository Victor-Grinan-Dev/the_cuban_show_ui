
import { db } from "../firebase";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";

const contentCollectionRef = collection(db, "content");
const tagCollectionRef = collection(db, "tags");
const deletedCollectionRef = collection(db, "deleted");

export const createContent = async (content) => {
  try {
    await addDoc(contentCollectionRef, { ...content, date: serverTimestamp() });
  } catch (error) {
    console.log(error);
  }
};

export const getContents = async () => {
  const data = await getDocs(contentCollectionRef);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const updateContent = async (id, content) => {
  const contentDoc = doc(db, "content", id);
  await updateDoc(contentDoc, content);
};

export const deleteContent = async (id) => {
  const contentDoc = doc(db, "content", id);
  await deleteDoc(contentDoc);
};

/////////////////// TAG ////////////////
export const addTag = async (tag) => {
  try {
    await addDoc(tagCollectionRef, tag);
  } catch (error) {
    console.log(error);
  }
};

export const getAllTags = async () => {
  const data = await getDocs(tagCollectionRef);

  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const updateTag = async (id, tag) => {
  const tagDoc = doc(db, "tags", id);
  await updateDoc(tagDoc, tag);
};

export const deleteTag = async (id) => {
  const tagDoc = doc(db, "tags", id);
  await deleteDoc(tagDoc);
};

/////////////////// DELETED ////////////////
export const addDeleted = async (content) => {
  try {
    await addDoc(deletedCollectionRef, content);
  } catch (error) {
    console.log(error);
  }
};

export const createDeleted = (/** content */ ) => {
  //get the content wanted to be deleted
  //save it in the deleted db
  //delete the content from content db
}


