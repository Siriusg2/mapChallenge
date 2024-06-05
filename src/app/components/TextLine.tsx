type TitleProps = {
  children: React.ReactNode;
  className?: string; // Optional string prop for class name
  // ...other props you might need
};

const TextLine = ({ children, className, ...rest }: TitleProps) => {
  return (
    <h1
      className={`text-md font-medium tracking-wide ${className || ""}`}
      {...rest}
    >
      {children}
    </h1>
  );
};

export default TextLine;
