import "./BookContent.css";
import React, {useState, useEffect} from "react";
import axios from "axios";

const BookContent = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const books = await axios({
        method: "get",
        url: `http://localhost:3000/books`,
      });

      setBooks(books.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("useEffect fire");
    getBooks();
  }, []);

  return (
    <div className="book-list-container">
      {books.map(book => (
        <div key={book.id} className="book-card">
          <img src={book.image} alt={book.title} className="book-cover" />
          <div className="book-details">
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Year:</strong> {book.year}</p>
            <p><strong>Publisher:</strong> {book.publisher}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
            <button className="btn btn-primary">Borrow</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookContent;