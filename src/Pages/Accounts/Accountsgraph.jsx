import React from "react";
import ReactApexChart from "react-apexcharts";

export const Accountgraph = () => {
  const series = [
    {
      name: "Net Profit",
      data: [200, 180, 170, 350, 260, 430, 360],
    },
    {
      name: "Revenue",
      data: [500, 431, 431, 435, 450, 250, 460],
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
        columnWidth: "65%",
        endingShape: "rounded",
        borderRadius: 9,
        colors: {
          ranges: [
            { from: 170, to: 430, color: "#1A16F3" },
            { from: 431, to: 500, color: "#FCAA0B" },
          ],
        },
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
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
      labels: {
        show: false,
      },
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
        breakpoint: 1024,
        options: {
          chart: {
            height: 255,
            width: "100%", // Make the chart take full width on tablets
          },
          plotOptions: {
            bar: {
              columnWidth: "60%",
            },
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 250,
            width: "100%", // Adjust to full width on mobile
          },
          plotOptions: {
            bar: {
              columnWidth: "80%", // Adjust bar width for better mobile display
            },
          },
          xaxis: {
            labels: {
              rotate: -45, // Adjust labels to fit better on smaller screens
              style: {
                fontSize: "10px", // Reduce font size on mobile
              },
            },
          },
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={255}
        width="100%"
      />
    </div>
  );
};
