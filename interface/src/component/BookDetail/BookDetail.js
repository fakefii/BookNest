import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './BookDetail.css';
import {FaBook} from 'react-icons/fa'

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/books/detail/${id}`) // Replace with your API endpoint
      .then(response => {
        setBook(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-detail-box-container">
      <div className="book-card">
        <div className="book-image">
          <img src={book.image} alt={book.title} />
        </div>
        <div className="book-details">
          <h2>{book.title}</h2>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Year:</strong> {book.year}</p>
          <p><strong>Publisher:</strong> {book.publisher}</p>
          <p><strong>Genre:</strong> NULL</p>
          <button className="btn btn-primary-detail">
            <FaBook className="icon" />Borrow</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
