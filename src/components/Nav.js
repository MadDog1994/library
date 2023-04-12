import { useNavigate } from "react-router-dom";
import React from "react";
import { Box, Button } from "@mui/material";

const Nav = () => {
  const navigate = useNavigate();
  const navigateToLandingPage = () => {
    navigate(`/books`);
  };
  const toLocalHost = () => {
    navigate(`/`);
  };
  return (
    <Box sx={{ display: "flex", gap: 5 }}>
      <Button
        sx={{ marginBottom: "5vh" }}
        variant={"outlined"}
        onClick={toLocalHost}
      >
        To start page
      </Button>
      <Button
        sx={{ marginBottom: "5vh" }}
        variant={"outlined"}
        onClick={navigateToLandingPage}
      >
        To Books
      </Button>
    </Box>
  );
};
export default Nav;
