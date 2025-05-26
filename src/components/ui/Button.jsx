import React from "react";
import "./button.css"; // optional if you want to separate styles

const Button = ({ children, onClick, className = "", type = "button", disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-black text-white px-4 py-2 rounded-2xl shadow-md transition duration-200 hover:bg-gray-800 disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
