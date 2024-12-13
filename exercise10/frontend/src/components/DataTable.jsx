import PropTypes from "prop-types";
import { useMemo, useState } from "react";

export const DataTable = ({ columns, data, onRowClick }) => {
  const [sortConfig, setSortConfig] = useState(null);

  // TODO implement sorting
  const sortedData = useMemo(() => {
    if (!sortConfig) return data;

    const sorted = [...data];
    // const { key, direction } = sortConfig;
    // sorted.sort(a,b itp.)

    return sorted;
  }, [data, sortConfig]);

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev && prev.key === key && prev.direction === "asc") {
        return { key, direction: "desc" };
      }
      return { key, direction: "asc" };
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead className="border-b-2 border-yellow-500">
          <tr>
            {columns.map((col) => (
              <th
                key={col.accessor}
                onClick={() => col.sortable && handleSort(col.accessor)}
                className={`px-4 py-2 text-left font-semibold ${
                  col.sortable ? "cursor-pointer hover:underline" : ""
                }`}
              >
                {col.label}
                {sortConfig?.key === col.accessor && (
                  <span className="ml-2 text-sm">
                    {sortConfig.direction === "asc" ? "▲" : "▼"}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <tr
              key={index}
              onClick={() => onRowClick && onRowClick(row)}
              className="cursor-pointer border-b-2 border-gray-300 hover:border-green-500 hover:bg-green-500/50"
            >
              {columns.map((col) => (
                <td key={col.accessor} className="px-4 py-2">
                  {row[col.accessor] || "-"}
                </td>
              ))}
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
