import React from "react";
import BookForm from "./BookForm";
import { Box, Typography } from "@mui/material";

function BookViewPage() {
  return (
    <Box>
      <Typography variant="h6" component="h2">
        Book View Page
      </Typography>
      <br />
      <BookForm isEdit={true} />
    </Box>
  );
}

export default BookViewPage;
