import PropTypes from "prop-types";

export const LinkButton = ({ children, to, variant, className }) => {
  const classes = {
    primary: "bg-green-500 hover:bg-green-600",
    secondary: "bg-blue-500 hover:bg-blue-600",
    danger: "bg-red-500 hover:bg-red-600",
  };

  const variantClasses = classes[variant];

  return (
    <a
      href={to}
      className={`flex min-w-fit items-center rounded p-2 text-white transition-all hover:scale-110 ${variantClasses} ${className}`}
    >
      {children}
    </a>
  );
};

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  className: PropTypes.string,
};
