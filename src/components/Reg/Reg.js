import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../Context/Context";

const Reg = () => {
  const { createaccount, updateall } = useContext(Authcontext);
  const reghandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(email, name, password, photo);
    // createaccount
    createaccount(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateall(name, photo)
          .then(() => {})
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
    // createaccount
  };
  return (
    <div className="mr-32 ml-32">
      <form onSubmit={reghandler} className="mx-96 auto">
        <div class="mb-6">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-black dark:text-black"
          >
            Your Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            class="bg-red-50 border border-red-300 text-white text-sm rounded-lg focus:ring-red-300 focus:border-red-300 block w-full p-2.5 dark:bg-red-300 dark:border-red-300 dark:placeholder-white dark:text-white dark:focus:ring-red-300 dark:focus:border-red-300"
            placeholder="Full Name"
            required=""
          />
        </div>
        <div class="mb-6">
          <label
            for="photo"
            class="block mb-2 text-sm font-medium text-black dark:text-black"
          >
            Your Photo Url
          </label>
          <input
            type="text"
            name="photo"
            id="photo"
            class="bg-red-50 border border-red-300 text-red-300 text-sm rounded-lg focus:ring-red-300 focus:border-red-300 block w-full p-2.5 dark:bg-red-300 dark:border-red-300 dark:placeholder-white dark:text-white dark:focus:ring-red-300 dark:focus:border-red-300"
            placeholder="photo url"
          />
        </div>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-black dark:text-black"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            class="bg-red-50 border border-red-300 text-red-300 text-sm rounded-lg focus:ring-red-300 focus:border-red-300 block w-full p-2.5 dark:bg-red-300 dark:border-red-300 dark:placeholder-white dark:text-white dark:focus:ring-red-300 dark:focus:border-red-300"
            placeholder="your email"
            required=""
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-black dark:text-black"
          >
            Your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            class="bg-red-50 border border-red-300 text-red-300 text-sm rounded-lg focus:ring-red-300 focus:border-red-300 block w-full p-2.5 dark:bg-red-300 dark:border-red-300 dark:placeholder-white  dark:text-white dark:focus:ring-red-300 dark:focus:border-red-300"
            required=""
            placeholder="Password"
          />
        </div>
        <div class="mb-6">
          <label
            for="conpassword"
            class="block mb-2 text-sm font-medium text-black dark:text-black"
          >
            Your confirm password
          </label>
          <input
            type="password"
            id="conpassword"
            class="bg-red-50 border border-red-300 text-red-500 text-sm rounded-lg focus:ring-red-300 focus:border-red-300 block w-full p-2.5 dark:bg-red-300 dark:border-red-300 dark:placeholder-white dark:text-white dark:focus:ring-red-300 dark:focus:border-red-300"
            required=""
            placeholder="Confirm Password"
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
          <label
            for="remember"
            class="ml-2 text-sm font-medium text-black dark:text-black"
          >
            Remember me
          </label>
        </div>
        <div>
          <p>
            Have You Already Account Please{" "}
            <Link className="text-red-500  " to="/login">
              LogIn
            </Link>
          </p>
        </div>
        <button
          type="submit"
          class="text-white mt-6 bg-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-red-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Reg;
