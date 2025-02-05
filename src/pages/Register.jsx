import { useContext, useState } from "react";
import { MdPhotoCamera } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

function Register() {
  const { createUser, updateUserProfile, setLoading } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  function hasUpperAndLower(password) {
    const upperAndLowerRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    return upperAndLowerRegex.test(password);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    if (password.length < 6) {
      setError("Password must contain at least 6 characters");
      return;
    }
    if (!hasUpperAndLower(password)) {
      setError("Password is too weak! ");
      return;
    }
    createUser(email, password)
      .then((res) => {
        updateUserProfile({ displayName: name, photoURL: photo });
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Account created successfully!",
        });
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {});
  };
  return (
    <main className="flex mt-16 items-center justify-center">
      <div className="max-w-xl space-y-4 rounded-xl px-16 py-12 shadow-2xl">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold">Register</h3>
          <p className="text-lg font-medium text-gray-600">
            Join Over 2 million people on the Chill Gamer website
          </p>
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex-grow basis-0 space-y-4"
        >
          {/* name input */}
          <div className="form-control">
            <span className="pb-3 text-xl font-bold">Name</span>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="name"
                name="name"
                required
              />
            </label>
          </div>
          {/* email input */}
          <div className="form-control">
            <span className="pb-3 text-xl font-bold">Email</span>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                className="grow"
                placeholder="email"
                name="email"
                required
              />
            </label>
          </div>
          {/* phto url input */}
          <div className="form-control">
            <span className="pb-3 text-xl font-bold">Photo url</span>
            <label className="input input-bordered flex items-center gap-2">
              <MdPhotoCamera className="text-gray-600" />
              <input
                type="text"
                className="grow"
                placeholder="Photo url"
                name="photo"
              />
            </label>
          </div>
          {/* password input */}
          <div className="form-control">
            <span className="pb-3 text-xl font-bold">Password</span>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="password"
                name="password"
              />
            </label>
            <span className="text-red-500">{error}</span>
          </div>
          {/* register button */}
          <div className="form-control pt-4">
            <button className="btn btn-success text-lg text-white">
              Register
            </button>
          </div>
          {/* login page link */}
          <div className="mt-4">
            <span className="mr-1">Already Have an account?</span>
            <Link
              to="/login"
              className="py-2 font-bold text-green-700 underline"
            >
              Log in
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Register;
