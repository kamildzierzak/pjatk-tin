import PropTypes from "prop-types";

export const Container = ({ children, className }) => {
  return (
    <div className={`mx-auto max-w-[1280px] ${className}`}>{children}</div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
