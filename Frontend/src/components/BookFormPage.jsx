import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import BookForm from "./BookForm";
import api from "../api";

function BookFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedBook, setSelectedBook] = useState(null);
  const isEditMode = Boolean(id);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await api.get(`/book/${id}`);
        setSelectedBook({
          ...res.data,
          description: res.data.description || res.data.title || "",
        });
      } catch (error) {
        toast.error("Unable to load book");
      }
    };

    if (isEditMode) {
      getBook();
    }
  }, [id, isEditMode]);

  const saveBook = async (bookData) => {
    try {
      const bookDetails = {
        name: bookData.name,
        price: Number(bookData.price),
        category: "Free",
        image: bookData.image,
        description: bookData.description,
      };

      if (isEditMode) {
        await api.put(`/book/${id}`, bookDetails);
        toast.success("Book updated");
      } else {
        await api.post("/book", bookDetails);
        toast.success("Book created");
      }

      navigate("/books");
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong";
      toast.error(message);
    }
  };

  return (
    <div className="max-w-screen-lg container mx-auto px-4 md:px-20 pt-28 pb-12">
      <div className="mb-6">
        <h1 className="text-2xl md:text-4xl font-bold">
          {isEditMode ? "Edit" : "Create"} <span className="text-pink-500">Book</span>
        </h1>
        <p className="mt-3 text-sm md:text-base">
          Fill the book details below. The image field accepts a public image URL.
        </p>
      </div>

      {!isEditMode || selectedBook ? (
        <BookForm
          selectedBook={selectedBook}
          onSave={saveBook}
          onCancel={() => navigate("/books")}
        />
      ) : (
        <p>Loading book...</p>
      )}

      <Link to="/books" className="btn mt-6">
        Back to Books
      </Link>
    </div>
  );
}

export default BookFormPage;
