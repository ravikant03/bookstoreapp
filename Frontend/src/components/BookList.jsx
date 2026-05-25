import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Cards from "./Cards";
import api from "../api";

function BookList() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const res = await api.get("/book");
      setBooks(res.data);
    } catch (error) {
      toast.error("Unable to load books");
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  const deleteBook = async (id) => {
    const isConfirmed = window.confirm("Do you want to delete this book?");

    if (!isConfirmed) {
      return;
    }

    try {
      await api.delete(`/book/${id}`);
      toast.success("Book deleted");
      getBooks();
    } catch (error) {
      toast.error("Unable to delete book");
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 pt-28 pb-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold">
            Book <span className="text-pink-500">Collection</span>
          </h1>
          <p className="mt-3 text-sm md:text-base">
            Browse all books saved in MongoDB. You can edit details, update the image URL, or remove old books.
          </p>
        </div>
        <Link to="/books/create" className="btn btn-secondary w-full sm:w-auto">
          Create Book
        </Link>
      </div>

      {books.length === 0 ? (
        <div className="mt-10 rounded-md border border-dashed p-8 text-center">
          <p>No books found. Create your first book to show it here.</p>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {books.map((item) => (
            <Cards key={item._id} item={item} onDelete={deleteBook} />
          ))}
        </div>
      )}
    </div>
  );
}

export default BookList;
