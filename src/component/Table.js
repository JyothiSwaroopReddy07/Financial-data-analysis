import React from "react";
import { useTable, useSortBy } from "react-table";

const formatToMillionsBillions = (value) => {
  if (value >= 1e12) {
    return `$${(value / 1e12).toFixed(2)} Trillion`;
  } else if (value >= 1e9) {
    return `$${(value / 1e9).toFixed(2)} Billion`;
  } else if (value >= 1e6) {
    return `$${(value / 1e6).toFixed(2)} Million`;
  }
  return `$${value.toLocaleString()}`;
};

const Table = ({ data }) => {
  const columns = React.useMemo(
    () => [
      { Header: "Date", accessor: "date" },
      {
        Header: "Revenue",
        accessor: "revenue",
        Cell: ({ value }) => formatToMillionsBillions(value), // Format revenue
      },
      {
        Header: "Net Income",
        accessor: "netIncome",
        Cell: ({ value }) => formatToMillionsBillions(value), // Format net income
      },
      {
        Header: "Gross Profit",
        accessor: "grossProfit",
        Cell: ({ value }) => formatToMillionsBillions(value), // Format gross profit
      },
      { Header: "EPS", accessor: "eps" },
      {
        Header: "Operating Income",
        accessor: "operatingIncome",
        Cell: ({ value }) => formatToMillionsBillions(value), // Format operating income
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <div className="overflow-x-auto">
    <table
      {...getTableProps()}
      className="min-w-full bg-white border border-gray-200 rounded-lg"
    >
      {/* Table Header */}
      <thead className="bg-gray-100">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className="text-left">
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className="py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200"
              >
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
  
      {/* Table Body */}
      <tbody {...getTableBodyProps()} className="divide-y divide-gray-200">
        {rows.length === 0 ? (
          <tr>
            <td
              colSpan={columns.length}
              className="py-4 px-4 text-center text-xs sm:text-sm text-gray-500"
            >
              No results found.
            </td>
          </tr>
        ) : (
          rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="hover:bg-gray-50 transition duration-150 ease-in-out"
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-700 break-words"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  </div>
  
  );
};

export default Table;
