import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Content from "./Content";

const Course = () => {
  const [categories, seCategories] = useState([]);
  useEffect(() => {
    fetch("https://edu-withmadness-server.vercel.app/category/")
      .then((res) => res.json())
      .then((data) => seCategories(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    // <div>
    //   <div className="grid grid-cols-2">
    //     {/* showcategory */}

    <div className="flex p-12">
      <div className="bg-red-100 mb-96 mr-10 p-10">
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`}>
              <p className="bg-slate-300 font-medium m-4 rounded-md text-black p-2 hover:bg-red-600">
                {category.title}
              </p>
            </Link>
          </p>
        ))}
      </div>
      <div className="bg-red-100">
        <div className="grid grid-cols-3 p-10 ">
          {categories.map((content) => (
            <Content key={content.id} content={content}></Content>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
