import React, { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import app from "../../firebase/firebase.config";
import { Authcontext } from "../Context/Context";

const Login = () => {
  const navigate = useNavigate();
  const { user, signinemail, Logout } = useContext(Authcontext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";
  const googleprovider = new GoogleAuthProvider();
  const gitprovider = new GithubAuthProvider();
  const auth = getAuth(app);
  const loginhandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // login
    signinemail(email, password).then((result) => {
      const user = result.user;
      console.log(user);

      navigate(from, { replace: true });
    });
    // login
  };
  const googlesignin = () => {
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((e) => console.error(e));
  };
  const gitlogin = () => {
    signInWithPopup(auth, gitprovider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((e) => console.error(e));
  };
  return (
    <div className="mr-32 ml-32">
      <form onSubmit={loginhandle} className="mx-96 auto">
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm font-medium text-black ">
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            class="bg-red-50 border border-red-300 text-black text-sm rounded-lg focus:ring-red-300 focus:border-red-300 block w-full p-2.5 dark:bg-red-300 dark:border-red-300 dark:placeholder-white dark:text-white dark:focus:ring-red-300 dark:focus:border-red-300"
            placeholder="Enter Your Email"
            required=""
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-black "
          >
            Your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            class="bg-red-50 border border-red-300 text-red-300 text-sm rounded-lg focus:ring-red-300 focus:border-red-300 block w-full p-2.5 dark:bg-red-300 dark:border-red-300 dark:placeholder-white dark:text-white dark:focus:ring-red-300 dark:focus:border-red-300"
            required=""
          />
        </div>
        <div class="flex items-start mb-6">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              class="w-4 h-4 bg-red-50 rounded border border-red-300 focus:ring-3 focus:ring-red-300 dark:bg-red-300 dark:border-red-300 dark:focus:ring-red-300 dark:ring-offset-red-300"
              required=""
            />
          </div>
          <label for="remember" class="ml-2 text-sm font-medium text-black ">
            Remember me
          </label>
        </div>
        <div>
          <p>
            Have You Not Account Please{" "}
            <Link className="text-red-500  " to="/reg">
              Register
            </Link>
          </p>
        </div>
        <button
          type="submit"
          class="text-white mt-6 bg-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-red-600"
        >
          LogIn
        </button>
        <p>you can sign in your social media</p>
        <div className="flex justify-center gap-12 mt-16">
          <p onClick={googlesignin} className="border-2 p-3 rounded-lg ">
            <FaGoogle className="text-red-500"></FaGoogle>
          </p>
          <p className="border-2 p-3 rounded-lg ">
            {" "}
            <FaFacebook className="text-blue-500"></FaFacebook>{" "}
          </p>
          <p onClick={gitlogin} className="border-2 p-3 rounded-lg">
            {" "}
            <FaGithub></FaGithub>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
