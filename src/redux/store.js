import { createStore } from "redux";

const initialState = {
  books: [
    {
      author: "Jek London",
      publishedYear: 1909,
      title: "Martin Eden",
      id: Date.now().toString(),
    },
  ],
};

const ADD_BOOK = "ADD_BOOK";
const EDIT_BOOK = "EDIT_BOOK";
const DELETE_BOOK = "DELETE_BOOK";

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const editBook = (book) => ({
  type: EDIT_BOOK,
  payload: book,
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  payload: id,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case EDIT_BOOK:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? action.payload : book
        ),
      };
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};

const store = createStore(booksReducer);

export default store;
