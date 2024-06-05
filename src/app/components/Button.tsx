import React from "react";

type ButtonProps = {
  size?: "small" | "medium" | "large"
  click: () => any
  label: string
  className?: string
};

const Button = ({
  size = "medium",
  click,
  label,
  className
}: ButtonProps) => {
  const sizeClasses = {
    small: "py-1 px-3 text-sm",
    medium: "py-1 px-3 text-md",
    large: "py-2 px-4 text-lg rounded-xl",
  };

  return (
    <button
      className={`${sizeClasses[size]} bg-secondary text-zinc-800 font-semibold uppercase tracking-wider rounded-md ${className || ""}`} onClick={click}
    >
      {label}
    </button>
  );
};

export default Button;
