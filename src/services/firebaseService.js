
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const contentCollectionRef = collection(db, "content");

export const getContents = async () => {
    const data = await getDocs(contentCollectionRef);
    return data.docs.map((doc) => ({...doc.data(), id: doc.id}));
  }