import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LaunchIcon from "@mui/icons-material/Launch";
import ConfirmModal from "../ConfirmModal";
import BookForm from "./BookForm";
const LandingPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isShowAddForm, setIsShowAddForm] = useState(false);
  const books = useSelector((state) => state.books);
  const navigate = useNavigate();
  const navigateToEditPage = (id) => {
    navigate(`/books/${id}/edit`);
  };
  const navigateToBookPage = (id) => {
    navigate(`/books/${id}`);
  };
  const deleteBook = (id) => {
    setIsOpenModal(true);
    sessionStorage.setItem("book_id", id);
  };
  return (
    <>
      <ConfirmModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      <Box
        sx={{
          display: "flex",
          gap: "5vh",
          marginBottom: "10vh",
        }}
      >
        <Box sx={{ width: "20vw" }}>
          <Button
            variant="outlined"
            sx={{ width: "10vw", height: "fit-content", marginBottom: "2vh" }}
            onClick={() => setIsShowAddForm(true)}
          >
            Add New Book
          </Button>
          {isShowAddForm && <BookForm setIsShowAddForm={setIsShowAddForm} />}
        </Box>
        <TableContainer
          component={Paper}
          sx={{ width: "40vw", height: "fit-content" }}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Author</TableCell>
                <TableCell align="right">Book Title</TableCell>
                <TableCell align="right">Published At</TableCell>
                <TableCell />
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {books &&
                books.map((book, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ cursor: "pointer" }}
                      onClick={() => navigateToBookPage(book.id)}
                    >
                      <LaunchIcon />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {book.author}
                    </TableCell>
                    <TableCell align="center">{book.title}</TableCell>
                    <TableCell align="center">{book.publishedYear}</TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        cursor: "pointer",
                      }}
                      onClick={() => navigateToEditPage(book.id)}
                    >
                      <EditIcon />
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ cursor: "pointer" }}
                      onClick={() => deleteBook(book.id)}
                    >
                      <DeleteIcon />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default LandingPage;
