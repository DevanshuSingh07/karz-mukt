import React from "react";

const Button = React.memo(({ children, className, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      className={`px-6 py-3 font-semibold rounded-lg shadow-md transition duration-300 ease-in-out ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

export default Button;
