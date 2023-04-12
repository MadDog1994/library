import { Box, Button, Modal, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteBook } from "../redux/store";

const ConfirmModal = ({ isOpenModal, setIsOpenModal }) => {
  const dispatch = useDispatch();
  const approveDeleteBook = () => {
    dispatch(deleteBook(sessionStorage.getItem("book_id")));
    setIsOpenModal(false);
  };
  const handleClose = () => {
    setIsOpenModal(false);
  };
  return (
    <Modal
      open={isOpenModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          background: "#fff",
          width: "20vw",
          margin: "25% auto",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Delete the book?
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            marginTop: "10px",
          }}
        >
          <Button variant="outlined" onClick={() => approveDeleteBook()}>
            Yes
          </Button>
          <Button variant="outlined" onClick={() => setIsOpenModal(false)}>
            No
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
export default ConfirmModal;
