import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CustomTable from './customTable';
import DonutTableView from './DonutTableView';
import PieChart from './pieChart';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';

export default function AdInsightsTable() {
  const data = [
    { metric: 'Male', clicks: 44, cost: 250, conversion: 12, revenue: 400 },
    { metric: 'Female', clicks: 55, cost: 300, conversion: 14, revenue: 500 },
    { metric: 'Unknown', clicks: 13, cost: 200, conversion: 15, revenue: 600 },
  ];

  const data2 = [
    { metric: 'Cosmetics', clicks: 44, cost: 250, conversion: 12, revenue: 400 },
    { metric: 'Serums', clicks: 55, cost: 300, conversion: 14, revenue: 500 },
    { metric: 'Facewash', clicks: 13, cost: 200, conversion: 15, revenue: 600 },
    { metric: 'Shampoos', clicks: 44, cost: 250, conversion: 12, revenue: 400 },
    { metric: 'Conditioners', clicks: 55, cost: 300, conversion: 14, revenue: 500 },
    { metric: 'Facewash2', clicks: 13, cost: 200, conversion: 15, revenue: 600 },
  ];

  const [showTable, setShowTable] = useState(false); // Initialize with Table View
  const handleToggle = () => {
    setShowTable(!showTable); // Toggle the view
  };

  return (
    <Box sx={{ boxShadow: '0px -4px 4px -3px rgba(0, 0, 0, 0.2)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '50%', padding: '8px', height: '20vh' }}>
          <CustomTable data={data2} />
        </div>
        <div style={{ width: '50%', padding: '8px', display: 'flex', flexDirection: 'column' }}>
          {showTable ? (
            // Render your Table View component
            <div><DonutTableView data={data} showTable={showTable} handleToggle={handleToggle} /></div>
          ) : (
            // Render your Donut Chart View component
            <div><PieChart handleToggle={handleToggle} /></div>
          )}
          {/* <div className="switch">
            <label className="switch" >
              <input type="checkbox" onChange={handleToggle} />
              <span className="slider round">
                <DonutLargeOutlinedIcon style={{ opacity: 1, margin: '3px', height: 25, width: 25, color: 'azure' }} />
                <TableChartOutlinedIcon style={{ zIndex: '10', opacity: 1, height: 25, width: 25, color: 'azure' }} />
              </span>
            </label>
          </div> */}
        </div>
      </div>
    </Box>
  );
}
