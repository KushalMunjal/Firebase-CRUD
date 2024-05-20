import {db } from '../firebase-config'

import {
    addDoc,
    collection,
    getDocs,
    deleteDoc,
    doc

} from "firebase/firestore";

const bookCollectionRef = collection(db,"books")

export const bookService = {
    getAllBooks : ()=>{
        return getDocs(bookCollectionRef)
    },
    addBook : (newBook)=>{
        return addDoc(bookCollectionRef, newBook);
    },
    deleteBook: (id) => { 
        const bookDocRef = doc(bookCollectionRef, id); 
        return deleteDoc(bookDocRef);
    },
}