import React from "react";
import { Link } from "react-router-dom";

const Content = ({ content }) => {
  console.log(content);
  return (
    <div>
      <div className="card w-80 mb-14 p-5 rounded mr-10 p-6 bg-red-200 bg-base-100 shadow-xl">
        <img src={content.img} alt="img" />
        <p className="font-semibold p-2 rounded text-black mt-5 bg-slate-300">
          {content.name}
        </p>
        <div className="card-body ">
          <div className="card-actions justify-end">
            <Link to={`/category/${content.id}`}>
              <button className="btn mt-5 rounded-lg bg-red-600 p-2 text-white  btn-primary">
                Check Course details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
