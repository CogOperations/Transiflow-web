const Button = ({
  label,
  onClick,
  className = "",
  variant = "base",
}) => {
  const baseStyles =
    "button-effect inline-flex items-center justify-center font-medium px-10 py-4 rounded-sm transition-all";

  const variants = {
    base: "bg-white text-primary",
    primary: "bg-gradient-to-r from-primary to-teal-800 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;