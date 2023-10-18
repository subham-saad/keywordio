import React, {useState} from 'react';
import { useTable, useSortBy } from 'react-table';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';

const CustomTable = ({ data, handleToggle,showTable }) => {

    // const [showTable, setShowTable] = useState(true); // Initialize with Table View
    // const handleToggle = () => {
    //   setShowTable(!showTable); // Toggle the view
    // };
  const columns = React.useMemo(
    () => [
      {
        Header: 'Metrics',
        accessor: 'metric', 
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
        <label className="switch" >
              <input type="checkbox" checked={showTable} onChange={handleToggle} />
              <span className="slider round">
                <DonutLargeOutlinedIcon style={{ opacity: 1, margin: '4px', height: 25, width: 25, color: 'azure' }} />
                <TableChartOutlinedIcon style={{ opacity: 1, margin: '4px', height: 25, width: 25, color: 'azure' }}/>
              </span>
       </label>
        </Paper>
    </Box>
  );
};

export default CustomTable;
