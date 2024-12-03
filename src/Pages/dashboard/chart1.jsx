import React from "react";
import ReactApexChart from "react-apexcharts";

export const Chart1 = () => {
  const series = [
    {
      name: "Net Profit",
      data: [500, 350, 340, 500, 160, 420, 400],
    },
    {
      name: "Revenue",
      data: [250, 130, 271, 380, 230, 250, 320],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "40%", // Adjust this value to control bar gap
        endingShape: "rounded",
        borderRadius: 5,
      },
    },
    colors: ["#1814F3", "#16DBCC"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    },
    yaxis: {
      min: 0,
      max: 500,
      tickAmount: 5,
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: 5,
    },
    responsive: [
      {
        breakpoint: 1280,
        options: {
          chart: {
            height: 350,
            width: "95%",
          },
          plotOptions: {
            bar: {
              columnWidth: "25%", // Adjust gap for desktops
            },
          },
        },
      },
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
            width: "90%",
          },
          plotOptions: {
            bar: {
              columnWidth: "45%", // Adjust gap for tablets
            },
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 250,
            width: "110%",
          },
          plotOptions: {
            bar: {
              columnWidth: "45%", // Adjust gap for mobile
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
        height="350"
        width="230%"
      
      />
    </div>
  );
};
