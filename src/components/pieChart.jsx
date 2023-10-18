import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';

const DonutChart = ({handleToggle}) => {
  const customStyles = {
    display: 'flex',
    flexDirection: 'column',
   
  };

  const chartContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    
  };

  const chartOptions = {
    chart: {
      type: 'donut',
    },
    labels: ['Male', 'Female', 'Unknown'],
    colors: ['#007FFF', '#F9812A', '#000000'],
    dataLabels: {
      enabled: false,
    },
   
  };

  const [selectedMetric, setSelectedMetric] = useState('clicks'); // Default selected metric
  const [chartData, setChartData] = useState({
    clicks: [44, 55, 13],
    cost: [250, 300, 200],
    revenue: [400, 500, 600],
    conversion: [12, 14, 15],
  });

  // Define a function to update the chart data based on user selection
  const updateChartData = (selectedMetric) => {
    // Fetch data for the selected metric from your data source or an API
    const newData = { ...chartData }; 

    setChartData(newData);
  };

  // Handle the metric selection change
  const handleMetricChange = (event) => {
    const metric = event.target.value;
    setSelectedMetric(metric);
    updateChartData(metric); // Update the chart data when the user changes the metric
  };

  return (
    <Box sx={customStyles}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2 className="table-title">Ad Insights</h2>
        <Select
          style={{ height: 20, padding: '9px', margin: '10px' }}
          label="Select Metric"
          value={selectedMetric}
          onChange={handleMetricChange}
        >
          {Object.keys(chartData).map((metric) => (
            <MenuItem key={metric} value={metric}>
              {metric}
            </MenuItem>
          ))}
        </Select>
      </div>

      <div style={chartContainerStyles}>
        <ReactApexChart options={chartOptions} series={chartData[selectedMetric]} type="donut" width={350} height={350} />
      </div>
      <label className="switch" >
              <input type="checkbox" onChange={handleToggle} />
              <span className="slider round">
                <DonutLargeOutlinedIcon style={{ opacity: 1, margin: '3px', height: 25, width: 25, color: 'azure' }} />
                <TableChartOutlinedIcon style={{ opacity: 1, margin: '3px', height: 25, width: 25, color: 'azure' }} />
              </span>
       </label>
    </Box>
  );
};

export default DonutChart;
