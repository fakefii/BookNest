import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './UpdateBookForm.css';
import Swal from 'sweetalert2'

const UpdateBookForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [publisher, setPublisher] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/books/detail/${id}`);
        const bookData = response.data;

        setTitle(bookData.title);
        setAuthor(bookData.author);
        setYear(bookData.year);
        setPublisher(bookData.publisher);
        setImage(bookData.image);
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    getBook();
  }, [id]);

  const updateBook = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:3000/books/update/${id}`, {
        title,
        author,
        year,
        publisher,
        image,
      });

      console.log('Book updated:', response.data);
      Swal.fire({
        icon: 'success',
        title: 'Book Updated',
        text: 'The book has been successfully updated.',
      }).then(() => {
        navigate('/books');
      });
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <div className="add-book-container">
      <h2>Update Book</h2>
      <form onSubmit={updateBook} className="add-book-form">
        <div className="form-group">
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Year:</label>
          <input type="text" value={year} onChange={(e) => setYear(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Publisher:</label>
          <input type="text" value={publisher} onChange={(e) => setPublisher(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary-update">
          Update Book
        </button>
      </form>
    </div>
  );
};

export default UpdateBookForm;