import React from 'react'
import {NavigationBar, ScrollingText, BookContent} from '../../component'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const BookPage = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <ScrollingText></ScrollingText>
      <BookContent></BookContent>
    </div>
  )
}

export default BookPage