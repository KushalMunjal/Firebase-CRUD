import React, { useEffect, useState } from 'react'
import { bookService } from '../services/firebase.services'

const BookLists = () => {
    const [books, setBooks] = useState([])
    useEffect(()=>{
        getBooks()
    },[])

    const getBooks= async () => {
        const data = await bookService.getAllBooks() 
        console.log(data.docs);  
        var newdata = data.docs.map((doc)=>({...doc.data(), id: doc.id}))
        setBooks(newdata)    
    }
    const handleDelete = async (id) => {
        try {
            await bookService.deleteBook(id);
            setBooks(books.filter(book => book.id !== id));
            console.log("Book deleted successfully");
        } catch (error) {
            console.error("Error deleting book:", error);
        }
    }
  return (
    <div>
        <table cellPadding={10} border={1} >
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book,index)=>
                     (<tr key={book.id}>
                        <td>{index+1}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.status}</td>
                        <td><button onClick={() => handleDelete(book.id)}>Delete</button></td>
                    </tr>)
                )}
                
            </tbody>
        </table>
    </div>
  )
}

export default BookLists