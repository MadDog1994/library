import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./components/library/LandingPage";
import BookEditPage from "./components/library/BookEditPage";
import BookViewPage from "./components/library/BookViewPage";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={null} />
        <Route path="/books" element={<LandingPage />} />
        <Route path="/books/:id/edit" element={<BookEditPage />} />
        <Route path="/books/:id" element={<BookViewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
