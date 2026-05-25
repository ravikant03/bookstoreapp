import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const emptyBook = {
  name: "",
  price: "",
  category: "Free",
  image: "",
  description: "",
};

const bookSchema = Yup.object({
  name: Yup.string().required("Book name is required"),
  price: Yup.number()
    .typeError("Price must be a number")
    .min(0, "Price cannot be negative")
    .required("Price is required"),
  category: Yup.string().required("Category is required"),
  image: Yup.string().url("Enter a valid image URL").required("Image URL is required"),
  description: Yup.string()
    .min(10, "Description must be at least 10 characters")
    .required("Description is required"),
});

function BookForm({ selectedBook, onSave, onCancel }) {
  return (
    <Formik
      initialValues={selectedBook || emptyBook}
      validationSchema={bookSchema}
      enableReinitialize
      onSubmit={(values, { setSubmitting }) => {
        onSave(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-base-200 dark:bg-slate-800 p-4 sm:p-6 rounded-md">
          <div>
            <Field className="input input-bordered w-full" name="name" placeholder="Book name" />
            <ErrorMessage className="text-sm text-red-500 mt-1" component="p" name="name" />
          </div>
          <div>
            <Field className="input input-bordered w-full" name="price" type="number" placeholder="Book price" />
            <ErrorMessage className="text-sm text-red-500 mt-1" component="p" name="price" />
          </div>
          <div>
            <Field as="select" className="select select-bordered w-full" name="category">
              <option value="Free">Free</option>
            </Field>
            <ErrorMessage className="text-sm text-red-500 mt-1" component="p" name="category" />
          </div>
          <div>
            <Field className="input input-bordered w-full" name="image" placeholder="Book image URL" />
            <ErrorMessage className="text-sm text-red-500 mt-1" component="p" name="image" />
          </div>
          <div className="md:col-span-2">
            <Field
              as="textarea"
              className="textarea textarea-bordered w-full"
              name="description"
              placeholder="Book description"
            />
            <ErrorMessage className="text-sm text-red-500 mt-1" component="p" name="description" />
          </div>
          <div className="md:col-span-2 flex flex-col sm:flex-row gap-3">
            <button className="btn btn-secondary" type="submit" disabled={isSubmitting}>
              {selectedBook ? "Update Book" : "Add Book"}
            </button>
            {onCancel && (
              <button className="btn" type="button" onClick={onCancel}>
                Cancel
              </button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default BookForm;
