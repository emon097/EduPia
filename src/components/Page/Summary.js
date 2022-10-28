import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Summary = () => {
  const summary = useLoaderData();
  console.log(summary);
  return (
    <div>
      <div className="bg-green-500 m-10 p-3 rounded ">
        <p className="text-3xl text-white font-bold m-10 ">
          {" "}
          Course Name: {summary.name}{" "}
        </p>
        <div className="flex items-center mx-28 justify-center border rounded p-2 ">
          <p className="text-3xl font-semibold text-white m-1">
            {" "}
            Offered by :{" "}
          </p>
          <p className="text-white font-semibold "> {summary.provider} </p>
          <img className="w-28  " src={summary.providerimg} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="m-16">
          {" "}
          <form>
            <div class="grid md:grid-cols-2 mt-14 md:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="gray"
                  name="floating_first_name"
                  id="floating_first_name"
                  class="block py-2.5 px-0 w-full gray-sm gray-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:gray-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="floating_first_name"
                  class="peer-focus:font-medium absolute gray-sm gray-gray-500 dark:gray-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:gray-green-600 peer-focus:dark:gray-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your Card Name
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="gray"
                  name="floating_last_name"
                  id="floating_last_name"
                  class="block py-2.5 px-0 w-full gray-sm gray-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:gray-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="floating_last_name"
                  class="peer-focus:font-medium absolute gray-sm gray-gray-500 dark:gray-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:gray-green-600 peer-focus:dark:gray-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Card Number
                </label>
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  class="block py-2.5 px-0 w-full gray-sm gray-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:gray-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="floating_phone"
                  class="peer-focus:font-medium absolute gray-sm gray-gray-500 dark:gray-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:gray-green-600 peer-focus:dark:gray-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  CVV Number
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="number"
                  name="floating_company"
                  id="floating_company"
                  class="block py-2.5 px-0 w-full gray-sm gray-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:gray-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="number"
                  class="peer-focus:font-medium absolute gray-sm gray-gray-500 dark:gray-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:gray-green-600 peer-focus:dark:gray-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone Number(Optional)
                </label>
              </div>
            </div>
            <button
              type="submit"
              class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg gray-sm w-full sm:w-auto px-5 py-2.5 gray-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Pay
            </button>
          </form>{" "}
        </div>
        <div className="m-16 border p-10 rounded bg-gray-200 ">
          <img src={summary.img} alt="" />
          <div className="bg-green-500 p-5 mt-5">
            <p className="font-bold text-xl text-white">
              {" "}
              Course Category: {summary.title}{" "}
            </p>
            <div className="flex justify-centermt-5 p-2  items-center ">
              <p className="text-black text-white mr-3 font-bold">Author:</p>
              <img className="rounded-full" src={summary.author.photo} alt="" />
              <p className="text-black ml-2 font-medium">
                {summary.author.name}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
