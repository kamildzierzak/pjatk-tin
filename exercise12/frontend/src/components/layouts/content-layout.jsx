import PropTypes from "prop-types";

export const ContentLayout = ({ children, title }) => {
  return (
    <div className="p-4">
      <div className="border-b-2 border-dashed border-yellow-500 pb-4 pl-4">
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

ContentLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
