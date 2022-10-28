import React from "react";
import { FaRegGrinStars } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Summary from "./Summary";
const Category = () => {
  const course = useLoaderData();
  console.log(course);
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                {course.name}
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                {course.details.slice(0, 600)}
              </p>
              <p>
                <div className="rounded-md p-5 mt-10 bg-gray-300 ">
                  <div className="flex justify-centermt-5 p-2 border  items-center ">
                    <p className="text-black mr-3 font-bold">Author:</p>
                    <img
                      className="rounded-full"
                      src={course.author.photo}
                      alt=""
                    />
                    <p className="text-black ml-2 font-medium">
                      {course.author.name}{" "}
                    </p>
                  </div>
                  <p className="font-bold">
                    {" "}
                    Position {course.author.position}{" "}
                  </p>
                  <p className="font-bold">
                    {" "}
                    Instituite {course.author.instituite}{" "}
                  </p>
                </div>
              </p>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src={course.img}
              alt=""
            />
          </div>
          <div>
            <Link
              className="bg-orange-400 text-white w-48 p-2 rounded-lg flex items-center"
              to={`/summary/${course.id}`}
            >
              {" "}
              <p className="mr-2">Buy Premium Course</p>
              <FaRegGrinStars></FaRegGrinStars>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
