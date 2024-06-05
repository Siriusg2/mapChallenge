type TitleProps = {
  label: string;
  className?: string;
  superHuge?: boolean

};

const Title = ({ label, className,superHuge, ...rest }: TitleProps) => {
  return (
    <h1
      className={`text-2xl font-semibold tracking-wider ${superHuge && 'text-4xl'} ${className || ""}`}
      {...rest}
    >
      {label}
    </h1>
  );
};

export default Title;
