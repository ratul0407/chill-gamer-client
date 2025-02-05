import gradientImg from "../assets/gradient.png";
import googleIcon from "../assets/google-icon.png";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

function Login() {
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";
  console.log(from);

  const handleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => console.log(err));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Invalid Credentials",
          text: "Please enter valid email address and password",
        });
      });
  };
  return (
    <div className="font-montserrat xl:container xl:mx-auto">
      <div className="mx-auto w-11/12 sm:w-9/12 md:max-w-xl lg:mx-0 lg:flex lg:w-full lg:max-w-full lg:items-center">
        <div className="space-y-4 lg:w-1/2">
          <div className="space-y-8 rounded-xl px-5 py-12 shadow-2xl lg:mx-auto lg:w-9/12 lg:px-8">
            <div className="space-y-3">
              <h3 className="text-3xl font-bold">Welcome Back!</h3>
              <p className="text-xl text-gray-500">
                Login to Unleash your gaming potential
              </p>
            </div>
            <div className="space-y-4">
              <form
                onSubmit={(e) => handleSubmit(e)}
                className="flex-grow basis-0 space-y-4"
              >
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
                      placeholder="Email"
                      name="email"
                      required
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
                      required
                    />
                  </label>
                </div>
                <div className="form-control">
                  <button className="btn btn-success text-lg text-white">
                    Login
                  </button>
                </div>
              </form>

              {/* or */}
              <div className="my-4 flex items-center justify-center">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="mx-2 bg-white px-2 text-gray-500">or</span>
                <hr className="flex-grow border-t border-gray-300" />
              </div>
              {/* google button */}
              <div className="grid">
                <button
                  onClick={handleSignIn}
                  className="flex items-center justify-center gap-4 rounded-full border py-3 text-center transition-all duration-300 hover:bg-gray-100 active:scale-90"
                >
                  <img className="h-6 w-6" src={googleIcon} />
                  <p className="font-semibold">Sign In With Google</p>
                </button>
              </div>

              {/* register link */}
              <div className="flex items-center justify-center py-2">
                <h3 className="space-x-2">
                  <span className="font-medium">Don't have an account?</span>
                  <Link
                    to="/register"
                    className="font-bold text-green-700 underline"
                  >
                    Register here
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="relative hidden w-1/2 lg:block">
          <img className=" w-full" src={gradientImg} alt="" />
          <span className="absolute bottom-1/4 left-10 -translate-y-1/2 text-7xl font-bold text-white">
            Join over 2 Million gamers currently using Chill Gamers
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
