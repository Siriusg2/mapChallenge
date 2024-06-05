import React from "react";

type ButtonProps = {
  size?: "small" | "medium" | "large"
  click: () => any
  label: string
};

const Button = ({
  size = "medium",
  click,
  label,
}: ButtonProps) => {
  const sizeClasses = {
    small: "py-1 px-3 text-sm",
    medium: "py-1 px-3 text-md",
    large: "py-2 px-4 text-lg rounded-xl",
  };

  return (
    <button
      className={`${sizeClasses[size]} bg-green-800 text-yellow-300 font-semibold uppercase tracking-wider rounded-md`} onClick={click}
    >
      {label}
    </button>
  );
};

export default Button;
