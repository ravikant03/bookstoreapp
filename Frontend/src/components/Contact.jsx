import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import Navbar from "./Navbar";
import Footer from "./Footer";

const contactSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});

function Contact() {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-lg container mx-auto px-4 md:px-20 pt-28 pb-12 min-h-screen">
        <h1 className="text-2xl md:text-4xl font-bold">
          Contact <span className="text-pink-500">Us</span>
        </h1>
        <p className="mt-6 text-sm md:text-lg leading-7">
          Have a question about a book or the project? Send a message and we will get back to you soon.
        </p>

        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={contactSchema}
          onSubmit={(values, { resetForm }) => {
            toast.success("Message submitted");
            resetForm();
          }}
        >
          <Form className="mt-8 grid grid-cols-1 gap-4 bg-base-200 dark:bg-slate-800 p-4 sm:p-6 rounded-md">
            <div>
              <Field className="input input-bordered w-full" name="name" placeholder="Your name" />
              <ErrorMessage className="text-sm text-red-500 mt-1" component="p" name="name" />
            </div>
            <div>
              <Field className="input input-bordered w-full" name="email" type="email" placeholder="Your email" />
              <ErrorMessage className="text-sm text-red-500 mt-1" component="p" name="email" />
            </div>
            <div>
              <Field as="textarea" className="textarea textarea-bordered w-full" name="message" placeholder="Your message" />
              <ErrorMessage className="text-sm text-red-500 mt-1" component="p" name="message" />
            </div>
            <button className="btn btn-secondary w-full sm:w-fit" type="submit">
              Send Message
            </button>
          </Form>
        </Formik>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
