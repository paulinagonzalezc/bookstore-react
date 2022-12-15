import { createAsyncThunk } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';

// Actions
const ADD = 'bookstore-react/booksReducer/ADD';
const REMOVE = 'bookstore-react/booksReducer/REMOVE';
const GET = 'bookstore-react/booksReducer/GET';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xKgONp1vYVZJzmgq5zMK/books';

// Array with a few books
// const listBooks = [
//   {
//     id: uuidv4(),
//     title: 'The Hunger Games',
//     author: 'Suzanne Collins',
//   },
//   {
//     id: uuidv4(),
//     title: 'Dune',
//     author: 'Frank Herbert',
//   },
//   {
//     id: uuidv4(),
//     title: 'Capital in the Twenty-First Century',
//     author: 'Suzanne Collins',
//   },
// ];

// Reducer
export default function booksReducer(state = [], action) {
  switch (action.type) {
    case `${ADD}/fulfilled`:
      return state.concat(action.meta.arg);
    case `${REMOVE}/fulfilled`:
      return state.filter((book) => book.item_id !== action.meta.arg);
    case `${GET}/fulfilled`:
      console.log('chewie', action.payload);
      return Object.keys(action.payload).map((key) => {
        const { title, author, category } = action.payload[key][0];
        return {
          item_id: key,
          title,
          author,
          category,
        };
      });
    default: return state;
  }
}

// Action Creators
export const addBook = (book) => ({
  type: ADD,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE,
  book,
});

export const getBooks = createAsyncThunk(GET, async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
});

export const createBook = createAsyncThunk(ADD, async (book) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  console.log(response);
});

export const deleteBook = createAsyncThunk(REMOVE, async (itemId) => {
  const response = await fetch(`${url}/${itemId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(response);
});
