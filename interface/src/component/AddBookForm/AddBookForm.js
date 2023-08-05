import React, { useState } from 'react';
import axios from 'axios';
import "./AddBookForm.css";
import {useNavigate} from "react-router-dom"
import Swal from "sweetalert2"

const AddBookForm = () => {
    const history = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [publisher, setPublisher] = useState('');
  const [image, setImage] = useState(''); // New state for image URL

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/books/add", {
        title,
        author,
        year,
        publisher,
        image,
      });

      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Book added successfully!',
      }).then(() => {
        // Redirect to the books page
        history('/books');
      });

      // Handle success, redirect or show a success message
      console.log('Book added:', response.data);

      setTitle('');
      setAuthor('');
      setYear('');
      setPublisher('');
      setImage('');
    } catch (error) {

      console.error('Error adding book:', error);
    }
  };

  return (
    <div className="add-book-container">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Year:</label>
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Publisher:</label>
          <input
            type="text"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary-submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
