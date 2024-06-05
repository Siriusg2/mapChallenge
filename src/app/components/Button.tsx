import React from "react";

type ButtonProps = {
  size?: "small" | "medium" | "large";
  click: () => any;
  label: string;
  className?: string;
  icon?: React.ReactElement;
};

const Button = ({
  size = "medium",
  click,
  label,
  className,
  icon,
}: ButtonProps) => {
  const sizeClasses = {
    small: `${icon ? "p-1" : "py-1 px-3"} text-sm`,
    medium: `${icon ? "p-2" : "py-1 px-3"} text-md`,
    large: `${icon ? "p-3" : "py-2 px-4"} text-lg rounded-xl`,
  };

  return (
    <button
      className={`${
        sizeClasses[size]
      }  text-zinc-800 font-semibold uppercase tracking-wider rounded-md ${
        className || ""
      } bg-primary`}
      onClick={click}
    >
      {icon || label}
    </button>
  );
};

export default Button;
