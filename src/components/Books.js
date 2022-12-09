import React from 'react';
import Book from './Book';
import Inputs from './Inputs';

const listBooks = [
  { title: 'The Hunger Games', author: 'Suzanne Collins', category: 'Action' },
  { title: 'Dune', author: 'Frank Herbert', category: 'Science Fiction' },
  { title: 'Capital in the Twenty-First Century', author: 'Suzanne Collins', category: 'Economy' },
];

const Books = () => (
  <div className="books-container">
    <ul className="books">
      <Book
        title={listBooks[0].title}
        author={listBooks[0].author}
        category={listBooks[0].category}
      />
      <Book
        title={listBooks[1].title}
        author={listBooks[1].author}
        category={listBooks[1].category}
      />
      <Book
        title={listBooks[2].title}
        author={listBooks[2].author}
        category={listBooks[2].category}
      />
    </ul>
    <div className="horizontal-divider" />
    <Inputs />
  </div>
);

export default Books;
