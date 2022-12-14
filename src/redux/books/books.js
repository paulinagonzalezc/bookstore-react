// Actions
const ADD = 'bookstore-react/booksReducer/ADD';
const REMOVE = 'bookstore-react/booksReducer/REMOVE';

// Array with a few books
const listBooks = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

// Reducer
export default function booksReducer(state = listBooks, action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.book,
      ];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
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
