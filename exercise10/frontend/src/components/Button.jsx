import PropTypes from "prop-types";

export const Button = ({ children, onClick, variant, className }) => {
  const classes = {
    primary: "bg-green-500 hover:bg-green-600",
    secondary: "bg-blue-500 hover:bg-blue-600",
    danger: "bg-red-500 hover:bg-red-600",
  };

  const variantClasses = classes[variant];

  return (
    <button
      onClick={onClick}
      className={`flex min-w-fit items-center rounded p-2 text-white transition-all hover:scale-110 ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  className: PropTypes.string,
};
