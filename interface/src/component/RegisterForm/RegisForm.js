import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "./register.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function RegisForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const addUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/users/register', {
        username: formData.username,
        name: formData.name,
        address: formData.address,
        email: formData.email,
        password: formData.password,
      });

      Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: 'You have successfully registered.',
      }).then(() => {
        navigate('/users/login'); // Redirect to the login page after successful registration
      });
    } catch (error) {
      console.error('Registration Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: 'An error occurred during registration. Please try again.',
      });
    }
  };

  return (
    <div className="register-container bg-dark">
      <div className="register-form-container">
        <h2 className="register-form-title">Register</h2>
        <form onSubmit={addUser}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
              maxLength="50"
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Name"
              required
              maxLength="50"
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your Address"
              required
              maxLength="200"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              minLength="6"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
              minLength="6"
            />
          </div>
          <div className="button-container">
            <button type="submit" className="btn btn-primary">Register</button>
            <Link to='/' type="button" className="btn btn-secondary">Go Back</Link>
          </div>
        </form>
        {/* "Go Back" button */}
        <p className="mt-2">Already have an account?
        <Link to="/users/login">Login here</Link></p>
      </div>
    </div>
  );
}

export default RegisForm;