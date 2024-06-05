type TitleProps = {
  label: string;
  className?: string; // Optional string prop for class name
  // ...other props you might need
};

const Title = ({ label, className, ...rest }: TitleProps) => {
  return (
    <h1
      className={`text-2xl font-semibold tracking-wider ${className || ""}`}
      {...rest}
    >
      {label}
    </h1>
  );
};

export default Title;
