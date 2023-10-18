import React from 'react';
import { useTable, useSortBy } from 'react-table';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const CustomTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Metrics',
        accessor: 'metric', // This corresponds to the 'Male', 'Female', 'Unknown', and 'Total' keys in your data
      },
      {
        Header: 'Clicks',
        accessor: 'clicks',
      },
      {
        Header: 'Cost',
        accessor: 'cost',
      },
      {
        Header: 'Conversion',
        accessor: 'conversion',
      },
      {
        Header: 'Revenue',
        accessor: 'revenue',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: { sortBy: [{ id: 'metric', desc: false }] }, // Default sorting by Metrics
    },
    useSortBy
  );

  const calculateTotal = () => {
    // Calculate the total values for each column
    const totalRow = {
      metric: 'Total',
      clicks: data.reduce((acc, row) => acc + row.clicks, 0),
      cost: data.reduce((acc, row) => acc + row.cost, 0),
      conversion: data.reduce((acc, row) => acc + row.conversion, 0),
      revenue: data.reduce((acc, row) => acc + row.revenue, 0),
    };
    return totalRow;
  };

  const totalRow = calculateTotal();

  return (
    <Box>
      <Paper>
        <div>
          <h2 className="table-title">Ad Insights</h2>
          <span></span>
        </div>
        <table className="custom-table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={column.isSorted ? (column.isSortedDesc ? 'desc' : 'asc') : ''}
                  >
                    {column.render('Header')}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <ExpandMoreOutlinedIcon />
                      ) : (
                        <ExpandLessOutlinedIcon />
                      )
                    ) : (
                      ''
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                  })}
                </tr>
              );
            })}
            <tr>
              {columns.map((column) => (
                <td key={column.Header}>{totalRow[column.accessor]}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </Paper>
    </Box>
  );
};

export default CustomTable;
