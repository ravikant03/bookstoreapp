import React from "react";
import Navbar from "../components/Navbar";
import BookList from "../components/BookList";
import Footer from "../components/Footer";

function Courses() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <BookList />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
