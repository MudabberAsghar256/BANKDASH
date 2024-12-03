import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [chartData] = useState({
    series: [
      {
        name: "Desktops",
        data: [100, 341, 235, 451, 749, 62, 339, 75],
      },
    ],
    options: {
      chart: {
        type: "line",
        zoom: { enabled: false },
        toolbar: { show: false },
        background: "transparent",
      },
      colors: ["#1814F3"],
      grid: {
        borderColor: "#e0e0e0",
        strokeDashArray: 4,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
        axisBorder: { show: true, color: "#ccc" },
        axisTicks: { show: true, color: "#ccc" },
      },
      yaxis: {
        min: 0,
        max: 800,
        tickAmount: 4,
        axisBorder: { show: true, color: "#ccc" },
        axisTicks: { show: true, color: "#ccc" },
      },
      legend: { show: false },
      responsive: [
        {
          breakpoint: 1445, // Desktop screens
          options: {
            chart: {
              height: 290,
              width: "210%",
            },
            xaxis: {
              labels: { style: { fontSize: "14px" } },
            },
            yaxis: {
              labels: { style: { fontSize: "14px" } },
            },
          },
        },
        {
          breakpoint: 1280, // Desktop screens
          options: {
            chart: {
              height: 400,
              width: "70%",
            },
            xaxis: {
              labels: { style: { fontSize: "14px" } },
            },
            yaxis: {
              labels: { style: { fontSize: "14px" } },
            },
          },
        },
        {
          breakpoint: 1024, // Tablet screens
          options: {
            chart: {
              height: 150,
              width: "90%",
            },
            xaxis: {
              labels: { style: { fontSize: "12px" } },
            },
            yaxis: {
              labels: { style: { fontSize: "12px" } },
            },
          },
        },
        {
          breakpoint: 768, // Mobile screens
          options: {
            chart: {
              height: 250,
              width: "115%",
            },
            xaxis: {
              labels: { style: { fontSize: "10px" } },
            },
            yaxis: {
              labels: { style: { fontSize: "10px" } },
            },
          },
        },
      ],
    },
  });

  return (
    <div className="w-full flex justify-center">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        width={width > 1280 ? "230%" : width > 768 ? "90%" : "100%"}
        height={width > 1280 ? 290 : width > 768 ? 500 : 250}
      />
    </div>
  );
};

export default ApexChart;
