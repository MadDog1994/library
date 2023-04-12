import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, editBook } from "../../redux/store";
import { Button, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
const BookForm = ({ isEdit, setIsShowAddForm }) => {
  const { id } = useParams();
  const books = useSelector((state) => state.books);
  const getBookById = (id) => {
    return books.find((book) => book.id === id);
  };

  const [author, setAuthor] = useState(() => {
    const book = getBookById(id);
    return book ? book.author : "";
  });

  const [publishedYear, setPublishedYear] = useState(() => {
    const book = getBookById(id);
    return book ? book.publishedYear : "";
  });

  const [title, setTitle] = useState(() => {
    const book = getBookById(id);
    return book ? book.title : "";
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setFormSubmitted(true);
  }, [title, author, publishedYear]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: isEdit ? id : Date.now().toString(),
      title,
      author,
      publishedYear,
    };
    if (isEdit) {
      dispatch(editBook(newBook));
    } else {
      dispatch(addBook(newBook));
      setIsShowAddForm(false);
    }
    navigate(`/books`);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handlePublishedYearChange = (e) => {
    setPublishedYear(e.target.value);
  };

  const isFormValid = () => {
    if (!title || !author || !publishedYear) {
      return false;
    } else if (
      publishedYear < 1900 ||
      publishedYear > new Date().getFullYear()
    ) {
      return false;
    }
    return true;
  };
  const isSaveButtonDisabled = !isFormValid() && formSubmitted;
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        maxWidth: "300px",
        marginBottom: "5vh",
      }}
    >
      <TextField
        label="Name"
        value={title}
        onChange={handleTitleChange}
        inputProps={{ maxLength: 70 }}
        required
      />
      <TextField
        label="Author"
        value={author}
        onChange={handleAuthorChange}
        inputProps={{ maxLength: 120 }}
        required
      />
      <TextField
        label="Published year"
        type="number"
        value={publishedYear}
        onChange={handlePublishedYearChange}
        inputProps={{ min: 1900, max: new Date().getFullYear() }}
        required
      />
      <Button type="submit" variant="contained" disabled={isSaveButtonDisabled}>
        {isEdit ? "Edit" : "Add"}
      </Button>
    </form>
  );
};

export default BookForm;
