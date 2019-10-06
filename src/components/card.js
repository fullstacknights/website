import React from "react";

function Card({ children, className, variant }) {
  const backgroundColor = variant === "dark" ? "bg-gradient" : "bg-white";

  return (
    <div
      className={`flex flex-col items-center p-6 rounded shadow ${className} ${backgroundColor}`}
    >
      {children}
    </div>
  );
}

export default Card;
