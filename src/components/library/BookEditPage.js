import React from "react";
import BookForm from "./BookForm";
import { Box, Typography } from "@mui/material";

function BookEditPage() {
  return (
    <Box>
      <Typography variant="h6" component="h2">
        Edit Book Page
      </Typography>
      <br />
      <BookForm isEdit={true} />
    </Box>
  );
}

export default BookEditPage;
