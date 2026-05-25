import { Link, useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Login from "./Login";
import toast from "react-hot-toast";
import api from "../api";
import { useAuth } from "../context/AuthProvider";

const signupSchema = Yup.object({
  fullname: Yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [, setAuthUser] = useAuth();

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/user/signup", data);
      const signedUpUser = res.data.user;

      localStorage.setItem("Users", JSON.stringify(signedUpUser));
      setAuthUser(signedUpUser);
      toast.success("Signup successful");
      navigate(from, { replace: true });
    } catch (err) {
      const message = err.response?.data?.message || "Signup failed";
      toast.error(message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-24">
      <div className="modal-box w-full max-w-md">
        <Formik
          initialValues={{ fullname: "", email: "", password: "" }}
          validationSchema={signupSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              X
            </Link>

            <h3 className="font-bold text-lg">Signup</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <Field
                type="text"
                name="fullname"
                placeholder="Enter your fullname"
                className="input input-bordered w-full"
              />
              <ErrorMessage className="text-sm text-red-500" component="p" name="fullname" />
            </div>
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
                Signup
              </button>
              <p>
                Have account?{" "}
                <button
                  className="underline text-blue-500 cursor-pointer"
                  type="button"
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </button>
                <Login />
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Signup;
