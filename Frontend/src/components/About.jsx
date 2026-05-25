import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-lg container mx-auto px-4 md:px-20 pt-28 pb-12 min-h-screen">
        <h1 className="text-2xl md:text-4xl font-bold">
          About <span className="text-pink-500">BookStore</span>
        </h1>
        <p className="mt-6 text-sm md:text-lg leading-7">
          BookStore is a simple MERN project for managing books. Users can sign up, log in, view books,
          create new books, edit existing book details, and delete books that are no longer needed.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-md border p-5">
            <h2 className="font-semibold text-lg">Frontend</h2>
            <p className="mt-2 text-sm">React, React Router, Tailwind CSS, DaisyUI, Formik, and Yup.</p>
          </div>
          <div className="rounded-md border p-5">
            <h2 className="font-semibold text-lg">Backend</h2>
            <p className="mt-2 text-sm">Node.js, Express, REST APIs, and beginner-friendly controller logic.</p>
          </div>
          <div className="rounded-md border p-5">
            <h2 className="font-semibold text-lg">Database</h2>
            <p className="mt-2 text-sm">MongoDB stores users and book records with image URLs and descriptions.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default About;
