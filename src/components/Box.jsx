import React from "react";

const Box = ({ title, completed }) => {
  if (completed) {
    return (
      <div className="mt-5 w-60 h-20 bg-green-300 flex justify-center items-center rounded-xl shadow-xl mb-5 mx-5 text-center transition duration-200 hover:scale-110">
        {title}
      </div>
    );
  } else {
    return (
      <div className="mt-5 w-60 h-20 bg-red-300 flex justify-center items-center rounded-xl shadow-xl mb-5 mx-5 text-center transition duration-200 hover:scale-110">
        {title}
      </div>
    );
  }
};

export default Box;
