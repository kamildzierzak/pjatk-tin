import PropTypes from "prop-types";

export const Drawer = ({ onClose, title, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75">
      <div className="h-full w-full bg-white p-4 pt-24 md:w-2/3">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl font-bold text-red-500 hover:text-red-600"
        >
          ✕
        </button>
        <div className="border-b-2 border-dashed border-yellow-500 pb-4 pl-4">
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

Drawer.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
