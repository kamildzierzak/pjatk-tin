import PropTypes from "prop-types";

export const ValidationMessage = ({ isValid, message }) => {
  if (isValid) {
    return null;
  }

  return <div className="text-sm italic text-red-500">{message}</div>;
};

ValidationMessage.propTypes = {
  isValid: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};
