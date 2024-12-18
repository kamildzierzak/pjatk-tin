import PropTypes from "prop-types";

export const DataTable = ({ columns, data, onRowClick }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead className="border-b-2 border-yellow-500">
          <tr>
            {columns.map((col) => (
              <th
                key={col.accessor}
                className={`px-4 py-2 text-left font-semibold`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              onClick={() => onRowClick && onRowClick(row)}
              className="cursor-pointer border-b-2 border-gray-300 hover:border-green-500 hover:bg-green-500/50"
            >
              {columns.map((col) => {
                if (col.accessor === "actions") {
                  return (
                    <td key={col.accessor} className="px-4 py-2">
                      {col.render(row)}
                    </td>
                  );
                } else {
                  return (
                    <td key={col.accessor} className="px-4 py-2">
                      {row[col.accessor] || "-"}
                    </td>
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

DataTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      accessor: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      sortable: PropTypes.bool,
    }),
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRowClick: PropTypes.func,
};
