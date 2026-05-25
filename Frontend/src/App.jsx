import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import BookFormPage from "./components/BookFormPage";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [authUser] = useAuth();
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/books"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/course" element={<Navigate to="/books" />} />
          <Route
            path="/books/create"
            element={authUser ? <BookFormPage /> : <Navigate to="/signup" />}
          />
          <Route
            path="/books/edit/:id"
            element={authUser ? <BookFormPage /> : <Navigate to="/signup" />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
