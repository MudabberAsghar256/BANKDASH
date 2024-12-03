import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const [chartOptions] = useState({
    series: [70, 50, 58, 65],
    options: {
      chart: {
        type: 'polarArea',
        height: 'auto', // Allow the chart to adjust its height automatically
      },
      labels: ['Rose B', 'Rose C', 'Rose D', 'Rose E'],
      fill: {
        opacity: 1,
        colors: ['#16DBCC', '#FF82AC', '#FFBB38', '#4C78FF'] // Custom colors
      },
      stroke: {
        width: 1,
        colors: undefined
      },
      yaxis: {
        show: false
      },
      legend: {
        position: 'bottom'
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0
          },
          spokes: {
            strokeWidth: 0
          },
        }
      },
      theme: {
        monochrome: {
          enabled: false // Set to false to use custom colors
        }
      }
    }
  });

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: 'auto' }}> {/* Responsive Container */}
      <div id="chart">
        <ReactApexChart options={chartOptions.options} series={chartOptions.series} type="polarArea" width="100%"  />
      </div>
    
    </div>
  );
};

export default ApexChart;
