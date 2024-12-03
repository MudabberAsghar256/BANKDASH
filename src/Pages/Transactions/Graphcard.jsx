import React from "react";
import ReactApexChart from "react-apexcharts";

export const Graphcard = () => {
  const series = [
    {
      name: "Net Profit",
      data: [200, 290, 220, 120, 295, 210],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%",
        endingShape: "rounded",
        borderRadius: 9,
        colors: {
          ranges: [
            { from: 0, to: 150, color: "#EDF0F7" },
            { from: 151, to: 290, color: "#EDF0F7" },
            { from: 291, to: 350, color: "#16DBCC" },
          ],
        },
      },
    },
    dataLabels: {

        position: 'top', // Position at the top of each bar
        formatter: function (val) {
          return `$${val}`; // Display the value with a dollar sign
        },
       
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["transparent"],
      },
  
 
    xaxis: {
      categories: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: 300,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    fill: {
      opacity: 1,
    },
    grid: {
      show: true,
      borderColor: "#e7e7e7",
      strokeDashArray: 4,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
    responsive: [
   
      {
        breakpoint: 1440,
        options: {
          chart: {
            height: 210,
            width: 290,
          },
          plotOptions: {
            bar: {
              columnWidth: "70%",
            },
          },
        },
      },
      {
        breakpoint: 668,
        options: {
          chart: {
            height: 200,
            width: 350,
          },
          plotOptions: {
            bar: {
              columnWidth: "70%",
            },
          },
        },
      },
    ],
  };

  return (
    <div className="w-full flex justify-center">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={210}
        width={384}
      />
    </div>
  );
};
export default Graphcard;

