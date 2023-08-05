import "./BookContent.css";
import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import Swal from 'sweetalert2'
import { FaEdit, FaTrash, FaInfoCircle } from 'react-icons/fa';
import { MdCreate } from 'react-icons/md';

const BookContent = () => {
  const [books, setBooks] = useState([]);
  const [showModifyButtons, setShowModifyButtons] = useState({});

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

  const toggleModifyButtons = (bookId) => {
    setShowModifyButtons((prevShowModifyButtons) => ({
      ...prevShowModifyButtons,
      [bookId]: !prevShowModifyButtons[bookId],
    }));
  };

  const deleteById = async (bookId) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this book!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel',
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:3000/books/${bookId}`);
        getBooks();
        Swal.fire('Deleted!', 'Your book has been deleted.', 'success');
      } catch (error) {
        Swal.fire('Error', 'An error occurred while deleting the book.', 'error');
      }
    }
  };

  return (
    <div className="book-list-container">
      <Link to="/books/add" className="btn btn-primary-add">
        + Add New Book
      </Link>
      
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <img src={book.image} alt={book.title} className="book-cover" />
          <div className="book-details">
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Year:</strong> {book.year}</p>
            <p><strong>Publisher:</strong> {book.publisher}</p>
            <p><strong>Genre:</strong> NULL</p>
            <Link to={`/books/detail/${book.id}`} className="btn btn-primary-list">
            <FaInfoCircle className="btn-icon-detail" />
              <span className="btn-text-detail">Details</span>
            </Link>
            <button
              className="btn btn-primary-modify"
              onClick={() => toggleModifyButtons(book.id)}
            >
              <FaEdit className="btn-icon-modify" />
                Modify
              </button>
            {showModifyButtons[book.id] && (
              <div className="modify-buttons">
                <Link to={`/books/update/${book.id}`} className="btn btn-update">
                <MdCreate className="btn-icon-update" />
                Update
              </Link>
              <button
            className="btn btn-delete"
            onClick={() => deleteById(book.id)}>
              <FaTrash className="btn-icon-delete" />
          Delete
        </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookContent;