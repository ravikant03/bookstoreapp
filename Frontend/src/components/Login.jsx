import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import api from "../api";
import { useAuth } from "../context/AuthProvider";

const loginSchema = Yup.object({
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function Login() {
  const [, setAuthUser] = useAuth();

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/user/login", data);
      const loggedInUser = res.data.user;

      localStorage.setItem("Users", JSON.stringify(loggedInUser));
      setAuthUser(loggedInUser);
      toast.success("Logged in successfully");
      document.getElementById("my_modal_3").close();
    } catch (err) {
      const message = err.response?.data?.message || "Login failed";
      toast.error(message);
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-11/12 max-w-md">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                X
              </Link>

              <h3 className="font-bold text-lg">Login</h3>
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
                <ErrorMessage className="text-sm text-red-500" component="p" name="email" />
              </div>
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                />
                <ErrorMessage className="text-sm text-red-500" component="p" name="password" />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
                <button className="btn btn-secondary" type="submit">
                  Login
                </button>
                <p>
                  Not registered?{" "}
                  <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                    Signup
                  </Link>
                </p>
              </div>
            </Form>
          </Formik>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
